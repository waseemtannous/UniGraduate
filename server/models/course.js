const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: String,
    id: String,
    lecturer: String,
    faculty: Number,
    preRequisites: Array,
    points: Number,
    semesterA: Boolean,
    semesterB: Boolean,
    semesterC: Boolean,
    grades: Array,
    lectures: Object,
    feedback: Array
});    

const Course = mongoose.model("course", courseSchema);

module.exports = Course;