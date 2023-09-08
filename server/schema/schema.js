import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    fullName: String,
    rollNumber: Number,
    courseName: String,
    mobileNumber: Number,
    email: String,
});

const Student = mongoose.model('student',studentSchema);

export default Student;