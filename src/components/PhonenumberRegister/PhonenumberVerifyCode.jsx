import {
  Dialog,
  DialogContent,
  DialogContentText,
  Zoom,
  TextField,
  DialogActions,
  Button,
  Typography,
  DialogTitle,
  Box,
  InputAdornment,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import LockIcon from "@material-ui/icons/Lock";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const VERIFY_CODE_PATTERN = /\d{6}$/;

function PhonenumberVerifyCode({
  showVerifyDialog,
  phoneVerifyFn,
  phonenumber,
}) {
  const { handleSubmit, control, errors: fieldErrors } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const phonenumberHiddenFormat =
    "+84 xxx " +
    phonenumber.substring(phonenumber.length - 3, phonenumber.length);

  const [status, setStatus] = useState("initial");
  const [errMsg, setErrMsg] = useState();

  const navigate = useNavigate();

  const verifyConfirmCode = (data) => {
    console.log(data);
    setErrMsg(undefined);
    if (!data.verifyCode || !phoneVerifyFn) {
      setErrMsg("Can not verify code.");
      return;
    }
    if (data.verifyCode.length !== 6) {
      setErrMsg("Verify code invalid format.");
      return;
    }
    phoneVerifyFn
      .confirm(data.verifyCode)
      .then((res) => {
        console.log(res);
        setErrMsg("Success!");
        // TODO: get idToken & send to backend to register new User
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrMsg("Error: Invalid verify code.");
      });
  };

  return (
    <Dialog
      open={showVerifyDialog ? true : false}
      maxWidth="xs"
      TransitionComponent={Zoom}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(verifyConfirmCode)}
      >
        <DialogTitle color="primary">Confirm phone number verify</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your verify code from your phone number
            {
              <Typography variant="caption" color="primary">
                &nbsp;{phonenumberHiddenFormat}&nbsp;
              </Typography>
            }
            :
            {errMsg && (
              <Typography variant="body2" color="error" align="center">
                {errMsg}
              </Typography>
            )}
          </DialogContentText>
          <Box px={2}>
            <Controller
              name="verifyCode"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Verify code is required.",
                },
                pattern: {
                  value: VERIFY_CODE_PATTERN,
                  message: "Verify code invalid format.",
                },
                maxLength: {
                  value: 6,
                  message: "Verify code must be 6 digit.",
                },
              }}
              render={({ value, onBlur, onChange, ref }) => (
                <TextField
                  id="verifyCode"
                  name="verifyCode"
                  type="number"
                  label="Verify code"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  fullWidth
                  required
                  autoFocus
                  margin="normal"
                  inputRef={ref}
                  helperText={
                    fieldErrors.verifyCode
                      ? fieldErrors.verifyCode.message
                      : undefined
                  }
                  error={!!fieldErrors.verifyCode}
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
                  value: 5,
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
                    fieldErrors.password
                      ? fieldErrors.password.message
                      : undefined
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
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<CheckCircleIcon color="inherit" />}
          >
            Verify
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default PhonenumberVerifyCode;
