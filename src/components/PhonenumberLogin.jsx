import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
} from "@material-ui/core";
import React from "react";
import CenterFluidLayout from "./CenterFluidLayout";
import { Controller, useForm } from "react-hook-form";

function PhonenumberLogin() {
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <CenterFluidLayout>
      <form noValidate onSubmit={handlerSubmit}>
        <Container maxWidth="xs">
          <Paper>
            <Box display="flex" flexDirection="column" padding={4}>
              <TextField
                id="phonenumber"
                label="Phonenumber"
                name="phonenumber"
                // value={}
                // onChange={}
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+84</InputAdornment>
                  ),
                }}
              />
              {/* <Controller
                name="phonenumber"
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
                        <InputAdornment position="start">+84</InputAdornment>
                      ),
                    }}
                  />
                )}
              /> */}
              <Button
                type="submit"
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
