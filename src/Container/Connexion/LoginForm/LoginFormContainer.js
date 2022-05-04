import { useFormik } from "formik";
import React from "react";
import LoginForm from "./LoginForm";
import { loginUser } from "../../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import loginValidationSchema from "./loginValidationSchema";

function LoginFormContainer() {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: loginValidationSchema,

    onSubmit: (values) => {
      dispatch(loginUser(values));
    },

  });
  return (
    <React.Fragment>
      <LoginForm formik={formik} />
    </React.Fragment>
  );
}

export default LoginFormContainer;
