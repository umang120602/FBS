// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Image from "../assets/image.png";
// import Logo from "../assets/FBS_Logo.png";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import "../assets/CSS/loginRegister.css"

// const Login = ({ onSignUpClick }) => {

//   const [showPassword, setShowPassword] = useState(false);

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });
  

//   return (
//     <div className="login-main">
//       <div className="login-left">
//         <img src={Image} alt="" />
//       </div>
//       <div className="login-right">
//         <div className="login-right-container">
//           <div className="login-logo">
//             <img src={Logo} alt="" height={100} width={200} />
//           </div>
//           <div className="login-center">
//             <h2>Login</h2>
//             <Formik
//               initialValues={{
//                 email: "",
//                 password: "",
//               }}
//               validationSchema={validationSchema}
//               onSubmit={(values, { setSubmitting }) => {
//                 console.log("Login Form submitted successfully:", values);
//                 setSubmitting(false);
//                 // Handle login logic here (e.g., API call)
//               }}
//             >
//               {({ isSubmitting }) => (
//                 <Form>
//                   <Field type="email" name="email" placeholder="Email" />
//                   <ErrorMessage name="email" component="div" className="error" />

//                   <div className="pass-input-div">
//                     <Field
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       placeholder="Password"
//                     />
//                     {showPassword ? (
//                       <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
//                     ) : (
//                       <FaEye onClick={() => setShowPassword(!showPassword)} />
//                     )}
//                     <ErrorMessage name="password" component="div" className="error" />
//                   </div>

//                   <div className="login-center-options">
//                     <a href="#" className="forgot-pass-link">
//                       Forgot password?
//                     </a>
//                   </div>

//                   <div className="login-center-buttons">
//                 <button type="button">Sign Up</button>
//               </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>

//           <p className="login-bottom-p">
//             Don't have an account?{" "}
//             <a href="#" onClick={onSignUpClick}>
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from 'react'

function Login() {
  return (
    <div>
      LOGIN
    </div>
  )
}

export default Login
