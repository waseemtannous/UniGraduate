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



app.listen(port, () => console.log(`Listening on port ${port}`));

