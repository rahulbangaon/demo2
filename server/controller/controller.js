import Student from "../schema/schema.js";


export const addStudent = async(req,res)=>{
    const studentData = req.body;
    const newStudent = new Student(studentData);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
        
    } catch (error) {
        console.log("Error while adding Student ",error);
    }
}