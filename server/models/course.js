const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: String,
    id: String,
    lecturer: String,
    faculty: Number,
    preRequisites: Array,
    points: Number,
    semester: String,
    grades: Array,
    lectures: Array,
});    

const Course = mongoose.model("course", courseSchema);

module.exports = Course;