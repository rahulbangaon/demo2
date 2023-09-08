import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import InputField from "../../components/inputField/InputField";
import { addStudentSchema } from "../../utils/formValidation";
import { addStudent } from "../../utils/api";

const Home = () => {
  const studentValue = {
    fullName: "",
    courseName: "",
    rollNumber: "",
    mobileNumber: "",
    email: "",
  };

  const { values, handleChange, handleBlur, handleSubmit,touched, errors } = useFormik({
    initialValues: studentValue,
    validationSchema: addStudentSchema,
    onSubmit: async(values) => {
      await addStudent(values);
     
    },
  });

  const inputs = [
    {
      id: 0,
      name: "fullName",
      type: "text",
      placeholder: "Please Enter Your Name",
      value: values.fullName,
      label: "Full Name",
      onChange: handleChange,
      onBlur: handleBlur,
    },
    {
      id: 1,
      name: "courseName",
      type: "text",
      placeholder: "Please Enter Your Course Name",
      value: values.courseName,
      label: "Course Name",
      onChange: handleChange,
      onBlur: handleBlur,
    },
    {
      id: 2,
      name: "rollNumber",
      type: "number",
      placeholder: "Please Enter Your Roll Number",
      value: values.rollNumber,
      label: "Roll Number",
      onChange: handleChange,
      onBlur: handleBlur,
    },
    {
      id: 3,
      name: "mobileNumber",
      type: "number",
      placeholder: "Please Enter Your Mobile Number",
      value: values.mobileNumber,
      label: "Mobile Number",
      onChange: handleChange,
      onBlur: handleBlur,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Please Enter Your Email",
      value: values.email,
      label: "Email",
      onChange: handleChange,
      onBlur: handleBlur,
    },
  ];

  //  console.log(errors);

  return (
    <>
      <div className="container">
        <h1>Welcome to Agami Student Management Portal!</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="input-form">
            <h3>Add Student Details</h3>
            {inputs.map((input) => {
              return <InputField key={input.id} {...input} error={errors[input.name]} isTouched={touched[input.name]} />;
            })}
            <button type="submit" className="btn">
              Add Student
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
