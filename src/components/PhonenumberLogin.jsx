import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  IconButton,
} from "@material-ui/core";
import React from "react";
import CenterFluidLayout from "./CenterFluidLayout";
import { Controller, useForm } from "react-hook-form";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HomeIcon from "@material-ui/icons/Home";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { firebaseAuth } from "../firebases/FirebaseIndex";
import firebase from "firebase/app";
import "firebase/auth";

const VN_PHONE_PREFIX = "+84";

function PhonenumberLogin() {
  const { control, handleSubmit, errors: fieldErrors } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    let phoneStr = VN_PHONE_PREFIX + data.phone;
    firebaseAuth
      .signInWithPhoneNumber(phoneStr, window.recaptchaVerifier)
      .then((confirmResult) => {
        console.log(confirmResult);
      })
      .catch((err) => console.log(err));
  };
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/");

  const validatePhone = (phoneInput) => {
    if (phoneInput === undefined || phoneInput.length <= 0) {
      return "Phone number is required.";
    }
    // if (phoneInput.length === 10 && phoneInput.startsWith("0")) {
    //   return undefined;
    // }
    if (phoneInput.length !== 9) {
      return "Invalid phone number.";
    }
    return undefined;
  };

  React.useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "verifyCapchaContainer"
    );
  });

  return (
    <CenterFluidLayout>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="xs">
          <Paper>
            <Box display="flex" justifyContent="space-between">
              <IconButton aria-label="go back" onClick={goBack} edge="end">
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                aria-label="go home"
                onClick={goHome}
                style={{ alignSelf: "center" }}
                color="primary"
                component={NavLink}
                to="/"
              >
                <HomeIcon fontSize="large" />
              </IconButton>
              <Box>
                <IconButton />
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" padding={4}>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{
                  required: {
                    value: true,
                    message: "Phone is required.",
                  },
                  validate: (value) => validatePhone(value),
                }}
                render={({ value, onBlur, onChange }) => (
                  <TextField
                    id="phone"
                    label="Phone"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                    required
                    margin="normal"
                    helperText={
                      fieldErrors.phone ? fieldErrors.phone.message : undefined
                    }
                    error={!!fieldErrors.phone}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {VN_PHONE_PREFIX}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <div id="verifyCapchaContainer" />
              <Button
                type="submit"
                // id="submitPhonenumberLogin"
                variant="outlined"
                size="large"
                color="primary"
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Container>
      </form>
    </CenterFluidLayout>
  );
}

export default PhonenumberLogin;
