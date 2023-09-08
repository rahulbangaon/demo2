import axios from 'axios';

const URL= "http://localhost:9000";

export const addStudent = async(student)=>{
        try {
            await axios.post(`${URL}/addStudent`,student);
            console.log("Student added succesfully");
            
        } catch (error) {
            console.log("Error While Calling addStudent api ",error);
        }
}