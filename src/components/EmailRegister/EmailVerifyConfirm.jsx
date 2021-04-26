import { Box, InputAdornment, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { firebaseAuth } from "firebases/FirebaseIndex";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function EmailVerifyConfirm() {
  const { control, handleSubmit, errors: fieldErrors } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const [status, setStatus] = React.useState("initial");
  const [errorMessage, setErrorMessage] = React.useState("");
  const savedVerifyEmail = localStorage.getItem("EMAIL_FOR_REGISTER");

  React.useEffect(() => {}, []);

  const onEmailVerifyConfirm = async (data) => {
    console.log(data);
    setStatus("loading");
    setErrorMessage("");
    await firebaseAuth
      .signInWithEmailLink(data.email)
      .then((res) => {
        localStorage.removeItem("EMAIL_FOR_REGISTER");
        const firebaseIdToken = res.user.getIdToken(true);
        console.log(firebaseIdToken);
        setErrorMessage("");
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
        setErrorMessage(err?.message);
      });
  };

  return (
    <form noValidate onSubmit={handleSubmit(onEmailVerifyConfirm)}>
      <Box p={2}>
        {status === "success" && (
          <>
            <Typography variant="body1" color="primary" align="center">
              Verify email success!
            </Typography>
          </>
        )}
        {status === "error" && (
          <Typography variant="subtitle1" color="error">
            {errorMessage}
          </Typography>
        )}
        <Controller
          name="email"
          control={control}
          defaultValue={savedVerifyEmail ? savedVerifyEmail : ""}
          rules={{
            required: {
              value: true,
              message: "Email is required.",
            },
            // validate: (value) => validateEmail(value),
          }}
          render={({ value, onBlur, onChange }) => (
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              fullWidth
              required
              autoFocus
              margin="normal"
              disabled={status === "loading" || status === "success"}
              helperText={
                fieldErrors.email ? fieldErrors.email.message : undefined
              }
              error={!!fieldErrors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue={""}
          rules={{
            required: {
              value: true,
              message: "Password is required.",
            },
            minLength: {
              value: 6,
              message: "Password must at least 6 character length.",
            },
            // validate: (value) => validateEmail(value),
          }}
          render={({ value, onBlur, onChange }) => (
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              fullWidth
              required
              autoFocus
              margin="normal"
              disabled={status === "loading" || status === "success"}
              helperText={
                fieldErrors.password ? fieldErrors.password.message : undefined
              }
              error={!!fieldErrors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Button
          style={{ marginTop: "8px" }}
          variant="outlined"
          type="submit"
          color="primary"
          fullWidth
          endIcon={status !== "success" && <CheckCircleIcon color="primary" />}
          size="large"
          disabled={status === "loading" || status === "success"}
        >
          Verify
        </Button>
      </Box>
    </form>
  );
}

export default EmailVerifyConfirm;
