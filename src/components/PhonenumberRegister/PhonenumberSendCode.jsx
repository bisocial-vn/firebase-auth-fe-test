import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import firebase from "firebase/app";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import SmsIcon from "@material-ui/icons/Sms";

const VN_COUNTRY_PHONE_PREFIX = "+84";

function PhonenumberSendCode({ onSubmit, loading }) {
  const { control, handleSubmit, errors: fieldErrors } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const validatePhone = (phoneInput) => {
    if (phoneInput === undefined || phoneInput.length <= 0) {
      return "Phone number is required.";
    }
    if (phoneInput.length === 10 && phoneInput.startsWith("0")) {
      return undefined;
    }
    if (phoneInput.length !== 9) {
      return "Invalid phone number.";
    }
    return undefined;
  };

  React.useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sendPhoneVerifyCode",
      { size: "invisible" }
    );
  }, []);

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" px={4} py={2}>
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
                name="phone"
                type="tel"
                label="Phone"
                variant="outlined"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                fullWidth
                required
                autoFocus
                margin="normal"
                helperText={
                  fieldErrors.phone ? fieldErrors.phone.message : undefined
                }
                error={!!fieldErrors.phone}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography variant="body1" color="primary">
                        {VN_COUNTRY_PHONE_PREFIX}
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <div id="verifyCapchaContainer" />
          <Button
            type="submit"
            id="sendPhoneVerifyCode"
            variant="outlined"
            size="large"
            color="primary"
            style={{ marginTop: "12px" }}
            disabled={loading}
            startIcon={loading ? <CircularProgress size="1rem" /> : <SmsIcon />}
          >
            Send
          </Button>
        </Box>
      </form>
    </>
  );
}

export default PhonenumberSendCode;
