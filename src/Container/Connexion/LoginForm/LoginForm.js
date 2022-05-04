import React from "react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./LoginForm.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../../../assets/logoARM.png";

/**Component Descripton:
 * This component is used to render the login form in the Connextion Container
 */
function LoginForm({ formik }) {
  const [isPasswordShown, setIsPasswordShown] = React.useState(false);
  return (
    <form
      className="loginForm"
      noValidate
      autoComplete="on"
      onSubmit={formik.handleSubmit}
    >
      <span>
        <h1>Connexion</h1>
      </span>
      <div className="content">
        <img
          src={Logo}
          alt="SysStock 3"
          style={{ width: "80px", objectFit: "cover" }}
        />
        <FormControl className="formControl">
          <TextField
            error={formik.errors.username ? true : false}
            id="username"
            type="text"
            variant="outlined"
            label="Telephone"
            helperText={formik.errors.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="inputField"
          />
        </FormControl>
        <FormControl className="formControl">
          <TextField
            className="inputField"
            error={formik.errors.password ? true : false}
            id="password"
            type={isPasswordShown ? "text" : "password"}
            variant="outlined"
            label="Mot de passe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.password}
            value={formik.values.password}
            InputProps={{
              endAdornment: isPasswordShown ? (
                <Visibility
                  onClick={() => setIsPasswordShown(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <VisibilityOff
                  onClick={() => setIsPasswordShown(true)}
                  style={{ cursor: "pointer" }}
                />
              ),
            }}
          />
        </FormControl>
        <Button
          style={{ width: "15ch" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
        <p>© 2021 - SysStocks</p>
      </div>
    </form>
  );
}

export default LoginForm;
