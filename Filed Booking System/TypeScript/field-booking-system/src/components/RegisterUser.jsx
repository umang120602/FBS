import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "../assets/image.png";
import Logo from "../assets/FBS_Logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "../assets/CSS/loginRegister.css";

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Confirm Password is required")
});

const RegisterUser = ({ onSignInClick }) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" height={100} width={200} />
          </div>
          <div className="login-center">
            <h2>Register</h2>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log('Form submitted successfully:', values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div>
                    <Field type="text" name="firstName" placeholder="First Name" />
                    <ErrorMessage name="firstName" component="div" className="error" />
                  </div>
                  <div>
                    <Field type="text" name="lastName" placeholder="Last Name" />
                    <ErrorMessage name="lastName" component="div" className="error" />
                  </div>
                  <div>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                  <div className="pass-input-div">
                    <Field
                      type={showPassword1 ? "text" : "password"}
                      name="password"
                      placeholder="Create Password"
                    />
                    {showPassword1 ? (
                      <FaEyeSlash onClick={() => setShowPassword1(!showPassword1)} />
                    ) : (
                      <FaEye onClick={() => setShowPassword1(!showPassword1)} />
                    )}
                    <ErrorMessage name="password" component="div" className="error" />
                  </div>
                  <div className="pass-input-div">
                    <Field
                      type={showPassword2 ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    {showPassword2 ? (
                      <FaEyeSlash onClick={() => setShowPassword2(!showPassword2)} />
                    ) : (
                      <FaEye onClick={() => setShowPassword2(!showPassword2)} />
                    )}
                    <ErrorMessage name="confirmPassword" component="div" className="error" />
                  </div>
                  <div className="login-center-buttons">
                <button type="button">Sign Up</button>
              </div>
                </Form>
              )}
            </Formik>
          </div>
          <p className="login-bottom-p">
            Already have an account?{" "}
            <a href="#" onClick={onSignInClick}>
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
