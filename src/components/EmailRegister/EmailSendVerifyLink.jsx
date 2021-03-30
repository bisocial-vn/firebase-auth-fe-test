import { Box, InputAdornment, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SendIcon from "@material-ui/icons/Send";
import { firebaseAuth } from "firebases/FirebaseIndex";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function EmailSendVerifyLink() {
  const { control, handleSubmit, errors: fieldErrors } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const [status, setStatus] = React.useState("initial");

  const onSendEmailVerifyLink = (data) => {
    console.log(data);
    setStatus("loading");
    firebaseAuth
      .sendSignInLinkToEmail(data.email, {
        url: "http://localhost:3000/finishSignUp?cartId=1234",
        handleCodeInApp: true,
      })
      .then(() => {
        localStorage.setItem("EMAIL_FOR_REGISTER", data.email);
        setStatus("complite");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSendEmailVerifyLink)}>
      <Box p={4}>
        {status === "complite" && (
          <>
            <Typography variant="subtitle2" color="primary" align="center">
              Send email success!
            </Typography>
            <Typography variant="subtitle2" color="primary" align="center">
              Please check your mailbox.
            </Typography>
          </>
        )}
        <Controller
          name="email"
          control={control}
          defaultValue=""
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
              disabled={status === "loading" || status === "complite"}
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
        <Button
          variant="outlined"
          type="submit"
          color="primary"
          fullWidth
          endIcon={status !== "complite" && <SendIcon color="primary" />}
          size="large"
          disabled={status === "loading" || status === "complite"}
        >
          Send
        </Button>
      </Box>
    </form>
  );
}

export default EmailSendVerifyLink;
