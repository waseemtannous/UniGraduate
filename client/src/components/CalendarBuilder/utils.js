// returns the courses that the user can take (preRequisites and semester)
export function getAvailableCourses(user, courses, semester) {

    let allCourses = [];
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].semesterA && semester === "A") {
            allCourses.push(courses[i].id);
        }
        if (courses[i].semesterB && semester === "B") {
            allCourses.push(courses[i].id);
        }
        if (courses[i].semesterC && semester === "C") {
            allCourses.push(courses[i].id);
        }
    }

    let userCourses = [];
    for (let i = 0; i < user.courses.length; i++) {
        userCourses.push(user.courses[i].courseId);
    }

    let availableCourses = [];

    let preRequisites = {};
    for (let i = 0; i < courses.length; i++) {
        preRequisites[courses[i].id] = [];
        for (let j = 0; j < courses[i].preRequisites.length; j++) {
            preRequisites[courses[i].id].push(courses[i].preRequisites[j].courseId);
        }
    }

    for (let i = 0; i < allCourses.length; i++) {
        if(userCourses.includes(allCourses[i])) {
            continue;
        }

        let preRequisitesOfCourse = preRequisites[allCourses[i]];
        let flag = true;
        for (let j = 0; j < preRequisitesOfCourse.length; j++) {
            if(!userCourses.includes(preRequisitesOfCourse[j])) {
                flag = false;
                break;
            }
        }
        
        if(flag) {
            availableCourses.push(allCourses[i]);
        }
    }

    let retVal = [];

    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        for (let j = 0; j < availableCourses.length; j++) {
            if(course.id === availableCourses[j]) {
                retVal.push(course);
            }
        }
    }

    return retVal;
}


export function addLesturesToAssignment(lectures, assignment, course) {
    let newAssignment = JSON.parse(JSON.stringify(assignment));


    for (let i = 0; i < lectures.length; i++) {
        const lecture = lectures[i];
        const day = lecture.day;
        const time = lecture.time;
        let start = parseInt(time.split("-")[0]);
        let end = parseInt(time.split("-")[1]);

        start = start - 8;
        end = end - 8;

        for (let j = start; j < end; j++) {
            if (typeof(newAssignment[day][j]) == "object" && newAssignment[day][j].length == 0) {
                newAssignment[day][j].push(course);
            } else {
                return null;
            }
        }
    }

    return newAssignment;
}


export function csp(courses, points, assignment, assignmentCourses, assignmentPoints, semester) {

    if (assignmentPoints === points) {
        return assignment;
    }

    if (assignmentPoints > points) {
        return null;
    }

    for (let i = 0; i < courses.length; i++) {
        if (assignmentCourses.includes(courses[i].id)) {
            continue;
        }

        
        let allLecturesGroupes = courses[i].lectures[semester];
        
        
        for (let j = 0; j < allLecturesGroupes.length; j++) {
            let lecturesGroup = allLecturesGroupes[j];
            let newAssignment = addLesturesToAssignment(lecturesGroup, assignment, courses[i]);
            if (newAssignment) {
                let newAssignmentCourses = [...assignmentCourses];
                newAssignmentCourses.push(courses[i].id);
                let res = csp(courses, points, newAssignment, newAssignmentCourses, assignmentPoints + courses[i].points, semester);
                if (res) {
                    return res;
                }
            }
        }

    }

    return null;
}

// filters:
// 1. points
// 2. mandatory
// 3. semester
// 4. working hours

export function fillCalendar(user, courses, minPoints, maxPoints, semester, mandatory, calendar, selectedCourses) {
    // get available courses and filter by semester
    // let availableCourses = getAvailableCourses(user, courses, semester);
    let availableCourses = courses;

    let calendarPoints = 0;

    if (selectedCourses.length > 0) {
        for (let i = 0; i < selectedCourses.length; i++) {
            calendarPoints += selectedCourses[i].points;
        }
    }

    let coursesIds = [];
    for (let i = 0; i < selectedCourses.length; i++) {
        coursesIds.push(selectedCourses[i].id);
    }

    for (let i = 0; i < selectedCourses.length; i++) {
        const course = selectedCourses[i];
        const lectures = course.lectures[semester][0];
        for (let j = 0; j < lectures.length; j++) {
            const lecture = lectures[j];
            const day = lecture.day;
            const time = lecture.time;
            let start = parseInt(time.split("-")[0]);
            let end = parseInt(time.split("-")[1]);

            start = start - 8;
            end = end - 8;

            for (let k = start; k < end; k++) {
                if (typeof(calendar[day][k]) == "object") {
                    calendar[day][k].push(course);
                }
            }
        }
    }

    // shuffle
    // availableCourses.sort(() => Math.random() - 0.5);

    // if (mandatory) {
    //     let mandatory = availableCourses.filter(course => course.mandatory);
    //     let notMandatory = availableCourses.filter(course => !course.mandatory);
    //     availableCourses = mandatory.concat(notMandatory);
    // }

    let assignments = [];

    for (let i = minPoints; i <= maxPoints; i++) {
        let assignment = csp(availableCourses, i, calendar, coursesIds, calendarPoints, semester);
        if (assignment) {
            assignments.push(assignment);
        }
    }

    return assignments;
}

