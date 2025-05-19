// import { Box, Button, FormControl, Input, Paper, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please fill in all fields");
//       return;
//     }

//     alert("Logged in!");
//   };

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignContent="center"
//       minHeight="50vh"
//       color="#f0f2f5"
//     >
//       <Paper elevation={3} sx={{ p: 4, width: 350 }}>
//         <Typography variant="h5" fontWeight="bold" gutterBottom>
//           Login
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Email"
//             type="email"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <Button
//             fullWidth
//             type="submit"
//             variant="contained"
//             color="primary"
//             sx={{ mt: 2 }}
//           >
//             Login
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// }
// export default Login;

import React from "react";
import { ToastContainer, toast } from "react-toastify"; // <-- import
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import validationSchema from "../Components/ValidationSchema";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      toast.success("Logged In!");

      console.log(values);
    },
  });

  // Destructuring formik fields for cleaner code
  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    formik;

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#e6f2ec"
      >
        <Paper elevation={3} sx={{ p: 4, width: 350 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              margin="normal"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#2F8D46",
                "&:hover": {
                  backgroundColor: "#256f38",
                },
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>

      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}

export default Login;
