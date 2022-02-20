const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    id: Number,
    courses: Array,
    grades: Array,
    gpa: Number,
});    

const User = mongoose.model("Users", userSchema);

module.exports = User;