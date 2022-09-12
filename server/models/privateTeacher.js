const mongoose = require("mongoose");

const privateTeacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    courses: Array,
});    

const PrivateTeacher = mongoose.model("privateTeacher", privateTeacherSchema);

module.exports = PrivateTeacher;