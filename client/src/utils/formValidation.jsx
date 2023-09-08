import * as Yup from "yup";

export const addStudentSchema = Yup.object({
  fullName: Yup.string().min(2).max(25).required("*Please Enter Full Name"),
  courseName: Yup.string().min(2).max(35).required("*Please Enter Your Course"),
  rollNumber: Yup.number().min(1).max(100).required("*Please Enter Roll Number"),
  mobileNumber: Yup.string().min(10).max(10).required("*Please Enter Your Mobile Number"),
  email: Yup.string().email().required("*Please Enter Email"),
});
