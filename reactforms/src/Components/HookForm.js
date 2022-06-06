import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./HookForm.css";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm()

  const [checkPassword, setCheckPassword] = useState(false);

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    const value = getValues();
    if (value.password !== value.confirmPassword) {
      setCheckPassword(true);
    } else 
    {
      reset(alert("Welcome to our platform, You have succesfully registered! 😉"));
      setCheckPassword(false);
    }
  }

  return (
    <div className="box">
        <h1>Your Registration Form</h1>
        <p>Please fill up the form to proceed!😃</p>
      <form className="main_form" onSubmit={handleSubmit(onSubmit)}>
         <div className="form_mail">
          <label htmlFor="email">Enter Your Email ID :</label>
          <br/>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id="email"
            {...register("email", { 
                required: true , 
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i})}/>
        </div>
        {errors.email && <h3 className="warning">Please enter your Email</h3>}

          <div className="first_name">
            <label htmlFor="firstname">Your First Name :</label>
            <br/>
            <input
              type="text"
              name="firstname"
              placeholder="Enter Your First Name"
              id="firstname"
              {...register("firstname", {
                required: true,
                minLength: 1,
                maxLength: 12,
              })}
            />
          </div>
           {errors.firstname?.type === "required" && (<h3 className="warning">Your First Name is Missing</h3>)}
          <div className="last_name">
            <label htmlFor="lastname">Your Last Name :</label>
            <br/>
            <input
              type="text"
              name="lastname"
              placeholder="Enter Your Last Name"
              id="lastname"
              {...register("lastname", {
                required: true,
                minLength: 1,
                maxLength: 12,
              })}
            />
          </div>
        {errors.lastname?.type === "required" && (<h3 className="warning">Your Last Name is Missing</h3>)}

        <div className="password_main">
            <label htmlFor="pass">Enter Your Password :</label>
            <br/>
            <input
              type="password"
              name="pass"
              id="pass"
              {...register("password", {
                required: "Please enter a password",
                minLength: {
                  value: 3,
                  message: "Password length should be atleast of 3 character",
                },
              })}
            />
          </div>
          {errors.password && (<h3 className="warning">Please Enter A Password</h3>)}
          <div className="password_confirmation">
            <label htmlFor="confirmpwd">Re-enter Your Password :</label>
            <br/>
            <input
              type="password"
              name="confirmpwd"
              id="confirmpwd"
              {...register("confirmPassword", { required: true })}
            />
          </div>  
        {errors.confirmPassword && (<h3 className="warning">Please Enter your Confirm Password</h3>)}
        {checkPassword && <h3 className="warning">Password Does Not match</h3>}
     

        <div className="contact_container">
            <label htmlFor="phone">Enter Your Mobile Number :</label>
            <br/>
            <input
              type="number"
              name="phone"
              placeholder="Enter Your Mobile Number"
              id="phone"
              {...register("phoneNumber", {
                required: "Please Enter your Mobile Number",
                maxLength: {
                  value: 12,
                  message: "Please Check Your Mobile Number Once",
                },
                minLength: {
                  value: 10,
                  message: "Please Check Your Mobile Number Once",
                },
              })}
            />
          </div>
        {errors.phoneNumber && (<h3 className="warning">Please Enter A Correct Mobile Number</h3>)}
    
          <div className="country_container">
            <label htmlFor="country">Select From Where You Belong :</label>
            <br/>
            <select name="country" id="country" {...register("country")}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <div className="Age_container">
            <label htmlFor="dob">Enter Your DOB :</label>
            <br/>
            <input
              type="date"
              name="dob"
              id="dob"
              {...register("dob", { required: true })}
            />
          </div>
          {errors.dob && <h3 className="warning">Please enter date of birth</h3>}

    <div className="gender_container">
            <label>What's Your Gender :</label>
            <div className="inner_gender_container">
              <input
                className="radio_container"
                type="radio"
                id="male"
                name="gender"
                value="Male"
                {...register("gender", {
                  required: "Please Select Your Gender",
                })}
              />
              <label htmlFor="male">Male</label>
              <input
                className="radio_container"
                type="radio"
                id="female"
                name="gender"
                value="Female"
                {...register("gender", {
                  required: "Please Select Your Gender",
                })}
              />
              <label htmlFor="female">Female</label>
              <input
                className="radio_container"
                type="radio"
                id="other"
                name="gender"
                value="other"
                {...register("gender", {
                  required: "Please Select Your Gender",
                })}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        {errors.gender && (<h3 className="warning">Please Select Your Gender</h3>)}
        <br/>

        <div className="checkbox_container">
          <input
            type="checkbox"
            id="correct"
            value="correct"
            name="correct"
            {...register("correct", { required: true })}
          />
          <label htmlFor="correct"> Check Here & Confirm that all the above Information are Correct</label>
        </div>
        {errors.correct && (<h3 className="warning">Please Select The Checkbox To Proceed</h3>)}

        <input type="submit" className="submit_button" value="Click Here to Submit" />
      </form>
    </div>
  );
}

export default HookForm;
