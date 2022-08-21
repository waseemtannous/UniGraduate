const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();

const User = require("./models/user");
const Teacher = require("./models/teacher");


const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_API);

const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.get('/create', async (req, res) => {
    const user = {
        name: "Waseem Tannous111",
        email: "waseemt99@gmail.com",
        password: "12345",
        id: 207866328,
        courses: [
            "CSCI-5100",
            "CSCI-5200",
            "CSCI-5300"
        ],
        grades: [
            {
            course: "CSCI-5100",
            grade: "90"
            },
            {
            course: "CSCI-5200",
            grade: "80"
            },
            {
            course: "CSCI-5300",
            grade: "70"
            }
        ],
        gpa: 80,
    };

    // User.create(user);

    res.json(user);
});

app.get('/read', async (req, res) => {
    const user = await User.find({
        name: "Waseem Tannous111"
    });


    res.json(user);

});

app.get('/Login/:userEmail/:userPassword', async (req, res) => {
    console.log(req.params)
    const user = await User.find({
        email: req.params.userEmail,
        password: req.params.userPassword
    });
    if(user.length){
        res.json(user[0]);
    }else{
        res.status(400).json({msg: 'No member was found'});
    }

    console.log(user);

});

app.get('/update', async (req, res) => {
    const user = await User.updateOne({
        name: "Waseem Tannous111"
    }, {
        $set: {
            name: "Waseem Tannous"
        }
    });

    const newUser = await User.find({name: "Waseem Tannous"});

    res.json(newUser);
});

app.get('/delete', async (req, res) => {
    const response = await User.deleteOne({
        name: "Waseem Tannous111"
    });

    res.json(response);

});

app.get('/getCourse/:courseName', async (req, res) => {
    const Computerandnetworksecurity = {
        name: "Computer and network security",
        id: "203.3448",
        lecturer: "Orr Dunkelman",
        faculty: 203,
        preRequisites: ["203.2110"],
        points: 4,
        semester: "A",
        grades:[
            {"year": 2013, "semester": "A", "average": 57.38},
            {"year": 2014, "semester": "A", "average": 55.689},
            {"year": 2019, "semester": "A", "average": 45},
            {"year": 2020, "semester": "A", "average": 52},
            {"year": 2021, "semester": "A", "average": 56}
        ],
        lectures: [
            [{"day": "sunday", "time": "14-16"}, {"day": "thursday", "time": "12-14"}]
        ],
        feedback: [
            "feedback3",
            "feedback2",
            "feedback1",
        ]
    };

    const Advancedcompileroptimizations = {
        name: "Advanced compiler optimizations",
        id: "203.3137",
        lecturer: "Yosi Ben Asher",
        faculty: 203,
        preRequisites: ["203.2130"],
        points: 3,
        semester: "B",
        grades:[
            {"year": 2018, "semester": "B", "average": 94.375}
        ],
        lectures: [
            [{"day": "tuesday", "time": "17-20"}]
        ],
        feedback: [
            "feedback3",
            "feedback2",
            "feedback1",
        ]
    };

    const Formalverification = {
        name: "Formal verification",
        id: "203.3223",
        lecturer: "Guy Avni",
        faculty: 203,
        preRequisites: ["203.3510"],
        points: 4,
        semester: "B",
        grades:[
            
        ],
        lectures: [
            [{"day": "monday", "time": "12-14"}, {"day": "wednesday", "time": "10-12"}]
        ],
        feedback: [
            "feedback3",
            "feedback2",
            "feedback1",
        ]
    };

    const courses = [Computerandnetworksecurity, Advancedcompileroptimizations, Formalverification];
    const courseName = req.params.courseName.replaceAll('-', ' ');

    for (let i = 0; i < courses.length; i++) {
        if(courses[i].name === courseName){
            res.json(courses[i]);
        }
    }
});

app.get('/getCoursesNames', async (req, res) => {
    const Computerandnetworksecurity = {
        name: "Computer and network security",
        id: "203.3448",
        lecturer: "Orr Dunkelman",
        faculty: 203,
        preRequisites: ["203.2110"],
        points: 4,
        semester: "A",
        grades:[
            {"year": 2013, "semester": "A", "average": 57.38},
            {"year": 2014, "semester": "A", "average": 55.689},
            {"year": 2019, "semester": "A", "average": 45},
            {"year": 2020, "semester": "A", "average": 52},
            {"year": 2021, "semester": "A", "average": 56}
        ],
        lectures: [
            [{"day": "sunday", "time": "14-16"}, {"day": "thursday", "time": "12-14"}]
        ]
    };

    const Advancedcompileroptimizations = {
        name: "Advanced compiler optimizations",
        id: "203.3137",
        lecturer: "Yosi Ben Asher",
        faculty: 203,
        preRequisites: ["203.2130"],
        points: 3,
        semester: "B",
        grades:[
            {"year": 2018, "semester": "B", "average": 94.375}
        ],
        lectures: [
            [{"day": "tuesday", "time": "17-20"}]
        ]
    };

    const Formalverification = {
        name: "Formal verification",
        id: "203.3223",
        lecturer: "Guy Avni",
        faculty: 203,
        preRequisites: ["203.3510"],
        points: 4,
        semester: "B",
        grades:[
            
        ],
        lectures: [
            [{"day": "monday", "time": "12-14"}, {"day": "wednesday", "time": "10-12"}]
        ]
    };

    const coursesNames = [
        {value: Computerandnetworksecurity.name, label: Computerandnetworksecurity.name},
        {value: Advancedcompileroptimizations.name, label: Advancedcompileroptimizations.name},
        {value: Formalverification.name, label: Formalverification.name}
    ]

    res.json(coursesNames);
});

app.get('/getLecturer/:lecturerName', async (req, res) => {
    const guyAvni = {
        name: "Guy Avni",
        email: "gavni@cs.haifa.ac.il",
        id: 1,
        room: 409,
        phone: "04-8240526",
        specialties: [
            "Formal methods",
            "game theory"
        ],
        feedback: [
            "feedback3",
            "feedback2",
            "feedback1",
        ]
    };

    const ritaOsedtsi = {
        name: "Rita Osedtsi",
        email: "rita@cs.haifa.ac.il",
        id: 2,
        room: 410,
        phone: "04-8288444",
        specialties: [
            "Computer Vision",
            "Machine Learning"
        ],
        feedback: [
            "feedback3",
            "feedback2",
            "feedback1",
        ]
    };

    const yosiBenAsher = {
        name: "Yosi Ben Asher",
        email: "yosi@cs.haifa.ac.il",
        id: 3,
        room: 513,
        phone: "04-8240338",
        specialties: [
            "Parallel calculation",
            "Operating Systems",
            "Compilers"
        ],
        feedback: [
            "feedback3",
            "feedback2",
            "feedback1",
        ]
    };

    const orrDunkelman = {
        name: "Orr Dunkelman",
        email: "orrd@cs.haifa.ac.il",
        id: 4,
        room: 408,
        phone: "04-8288447",
        specialties: [
            "Cryptography and Cryptanalysis",
            "Computer security"
        ],
        feedback: [
            "feedback3",
            "feedback2",
            "feedback1",
        ]
    };

    const lecturers = [guyAvni, ritaOsedtsi, yosiBenAsher, orrDunkelman];
    const lecturerName = req.params.lecturerName.replaceAll('-', ' ');

    for (let i = 0; i < lecturers.length; i++) {
        if(lecturers[i].name === lecturerName){
            res.json(lecturers[i]);
        }
    }
});


app.get('/getlecturersNames', async (req, res) => {
    const guyAvni = {
        name: "Guy Avni",
        email: "gavni@cs.haifa.ac.il",
        id: 1,
        room: 409,
        phone: "04-8240526",
        specialties: [
            "Formal methods",
            "game theory"
        ],
    };

    const ritaOsedtsi = {
        name: "Rita Osedtsi",
        email: "rita@cs.haifa.ac.il",
        id: 2,
        room: 410,
        phone: "04-8288444",
        specialties: [
            "Computer Vision",
            "Machine Learning"
        ],
    };

    const yosiBenAsher = {
        name: "Yosi Ben Asher",
        email: "yosi@cs.haifa.ac.il",
        id: 3,
        room: 513,
        phone: "04-8240338",
        specialties: [
            "Parallel calculation",
            "Operating Systems",
            "Compilers"
        ],
    };

    const orrDunkelman = {
        name: "Orr Dunkelman",
        email: "orrd@cs.haifa.ac.il",
        id: 4,
        room: 408,
        phone: "04-8288447",
        specialties: [
            "Cryptography and Cryptanalysis",
            "Computer security"
        ],
    };
    const lecturersNames = [
        {value: guyAvni.name, label: guyAvni.name},
        {value: ritaOsedtsi.name, label: ritaOsedtsi.name},
        {value: yosiBenAsher.name, label: yosiBenAsher.name},
        {value: orrDunkelman.name, label: orrDunkelman.name}
    ]

    res.json(lecturersNames);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

