import {
  Box,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import BubbleChart from "@material-ui/icons/BubbleChart";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import "firebase/auth";
import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { firebaseAuth } from "../firebases/FirebaseIndex";
import CenterFluidLayout from "./CenterFluidLayout";
import PhonenumberSendCode from "./PhonenumberLogin/PhonenumberSendCode";
import PhonenumberVerifyCode from "./PhonenumberLogin/PhonenumberVerifyCode";

const VN_COUNTRY_PHONE_PREFIX = "+84";

function PhonenumberLogin() {
  const [confirmResultFn, setConfirmResultFn] = React.useState(undefined);
  const [err, setErr] = React.useState();

  const onSendingCode = (data) => {
    console.log(data);
    let phoneStr = VN_COUNTRY_PHONE_PREFIX + data.phone;
    firebaseAuth
      .signInWithPhoneNumber(phoneStr, window.recaptchaVerifier)
      .then((confirmResult) => {
        console.log(confirmResult);
        setConfirmResultFn(confirmResult);
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      });
  };
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <CenterFluidLayout>
        <Container maxWidth="xs">
          <Paper elevation={24}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bgcolor="background.default"
            >
              <IconButton aria-label="go back" onClick={goBack}>
                <ArrowBack />
              </IconButton>
              <Box display="flex" alignContent="center" alignItems="center">
                <MobileFriendlyIcon color="primary" />
                <Typography variant="button" component="h2" color="primary">
                  &nbsp;LOGIN USING PHONE
                </Typography>
              </Box>
              <Box style={{ visibility: "hidden" }}>
                <IconButton color="primary" component={NavLink} to="/">
                  <BubbleChart />
                </IconButton>
              </Box>
            </Box>
            {err && (
              <Typography variant="caption" color="initial">
                Test err
              </Typography>
            )}
            <PhonenumberSendCode onSubmit={onSendingCode} />
            <Box bgcolor="background.default" textAlign="center">
              <IconButton color="primary" component={NavLink} to="/">
                <BubbleChart />
              </IconButton>
            </Box>
          </Paper>
        </Container>
        <PhonenumberVerifyCode
          phoneVerifyFn={confirmResultFn}
          showVerifyDialog={confirmResultFn}
        />
      </CenterFluidLayout>
    </>
  );
}

export default PhonenumberLogin;
