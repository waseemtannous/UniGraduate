const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();

const User = require("./models/user");
const Teacher = require("./models/teacher");
const PrivateTeacher = require("./models/privateTeacher");
const Course = require("./models/course");

// import { createCourses, createTeachers, createPrivateTeachers, createUsers} from './data.js';

const Data = require("./data");

const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_API);

const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.get('/Login/:userEmail/:userPassword', async (req, res) => {
    const user = await User.find({
        email: req.params.userEmail.toLowerCase(),
        password: req.params.userPassword
    });
    if(user.length){
        res.status(200).json(user[0]);
    }else{
        res.status(400).json({msg: 'No member was found'});
    }

});

app.get('/getCourse/:courseName', async (req, res) => {
    const courseName = req.params.courseName.replaceAll('-', ' ');
    const course = await Course.findOne({name: courseName});


    res.json(course);
});

app.get('/getCoursesNames', async (req, res) => {

    const courses = await Course.find({});
    const coursesNames = [];
    for (let i = 0; i < courses.length; i++) {
        const courseLabel = {
            value: courses[i].name,
            label: courses[i].name
        }
        coursesNames.push(courseLabel);
    }

    res.json(coursesNames);
});

app.get('/getLecturer/:lecturerName', async (req, res) => {
    const lecturerName = req.params.lecturerName.replaceAll('-', ' ');
    const lecturer = await Teacher.findOne({name: lecturerName});

    res.json(lecturer);
});

app.get('/getlecturersNames', async (req, res) => {
    const lecturers = await Teacher.find({});
    const lecturersNames = [];
    for (let i = 0; i < lecturers.length; i++) {
        const courseLabel = {
            value: lecturers[i].name,
            label: lecturers[i].name
        }
        lecturersNames.push(courseLabel);
    }

    res.json(lecturersNames);
});

app.get('/addCourseFeedback/:feedback/:courseName', async (req, res) => {
    const courseName = req.params.courseName.replaceAll('-', ' ');
    const feedback = req.params.feedback;
    const course = await Course.findOne({name: courseName});
    course.feedback.push(feedback);
    course.save();
    res.json(course);
});

app.get('/addLecturerFeedback/:feedback/:lecturerName', async (req, res) => {
    const lecturerName = req.params.lecturerName.replaceAll('-', ' ');
    const feedback = req.params.feedback;
    const lecturer = await Teacher.findOne({name: lecturerName});
    lecturer.feedback.push(feedback);
    lecturer.save();
    res.json(lecturer);
});

app.get('/getCourses', async (req, res) => {
    const courses = await Course.find({});
    res.json(courses);
});

app.get('/getTeachers/:courseName', async (req, res) => {
    const courseName = req.params.courseName.replaceAll('-', ' ');
    const privateTeachers = await PrivateTeacher.find();
    let response = [];
    for (let i = 0; i < privateTeachers.length; i++) {
        for (let j = 0; j < privateTeachers[i].courses.length; j++) {
            if (privateTeachers[i].courses[j].courseName === courseName) {
                response.push(privateTeachers[i]);
            }
        }
    }

    res.json(response);
});

app.get('/createUsers', async (req, res) => {
    const allUsers = Data.createUsers();
    for (let i = 0; i < allUsers.length; i++) {
        User.create(allUsers[i]);
    }
    res.json("done");
});

app.get('/createPrivTeachers', async (req, res) => {
    const allTeachers = Data.createPrivateTeachers();
    for (let i = 0; i < allTeachers.length; i++) {
        PrivateTeacher.create(allTeachers[i]);
    }
    res.json("done");
});

app.get('/createCourses', async (req, res) => {
    const allCourses = Data.createCourses();
    for (let i = 0; i < allCourses.length; i++) {
        Course.create(allCourses[i]);
    }
    res.json("done");
});

app.get('/createTeachers', async (req, res) => {
    const allLecturers = Data.createTeachers();
    for (let i = 0; i < allLecturers.length; i++) {
        Teacher.create(allLecturers[i]);
    }
    res.json("done");
});


app.listen(port, () => console.log(`Listening on port ${port}`));

