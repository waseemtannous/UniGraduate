const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    id: Number,
    room: Number,
    phone: String,
    specialties: Array,
    courses: Array,
    feedback: Array
});    

const Teacher = mongoose.model("teacher", teacherSchema);

module.exports = Teacher;