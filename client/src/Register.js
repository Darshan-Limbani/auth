import React, { useState } from "react";

import { TextField, Button, Typography, Divider } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { InputAdornment } from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleRegister } from "./store/auth/action";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required!!"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      //   Handle form submission
      console.log("values--", values);

      dispatch(handleRegister(values));
    },
  });

  const handleVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-around">
      <form
        onSubmit={formik.handleSubmit}
        className=" rounded-md border border-1 p-5 flex flex-col gap-5 m-5"
      >
        <Typography className="text-left" variant="h4">
          Sign Up
        </Typography>
        <Divider />
        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          // fullW    idth
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          // className='m-4'
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          // fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className="m-4"
        />

        <TextField
          id="password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          // fullWidth
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" className="cursor-pointer">
                {showPassword ? (
                  <VisibilityOff onClick={handleVisibilityToggle} />
                ) : (
                  <VisibilityIcon onClick={handleVisibilityToggle} />
                )}
              </InputAdornment>
            ),
          }}
        />

        <Typography variant="body2">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-700 underline">
            {" "}
            Login here
          </Link>{" "}
        </Typography>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
