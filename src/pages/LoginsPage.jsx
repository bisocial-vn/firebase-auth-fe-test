import { Divider, makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import BasicPaperLayout from "components/layouts/BasicPaperLayout";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import React from "react";
import { NavLink } from "react-router-dom";
import AuthApi from "apis/AuthApi";

const useStyles = makeStyles((theme) => ({
  loginOptionItem: {
    width: "80%",
    margin: theme.spacing(1),
  },
}));

export default function LoginsPage() {
  React.useEffect(() => {
    AuthApi.loginWithCredential("test01@test.test", "secret")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
      style={{ height: "100%" }}
    >
      <Container maxWidth="xs">
        <BasicPaperLayout
          headerText="LOGIN"
          headerIcon={<LockOpenIcon color="primary" />}
        >
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
          >
            <Button
              className={classes.loginOptionItem}
              variant="outlined"
              color="primary"
              component={NavLink}
              to="phonenumber"
              startIcon={<GTranslateIcon />}
            >
              Login with google
            </Button>
            <Button
              className={classes.loginOptionItem}
              variant="outlined"
              color="primary"
              component={NavLink}
              to="phonenumber"
              startIcon={<MailOutlineIcon />}
            >
              Login with email
            </Button>
            <Button
              className={classes.loginOptionItem}
              variant="outlined"
              color="primary"
              component={NavLink}
              to="phonenumber"
              startIcon={<MobileFriendlyIcon />}
            >
              Login with phonenumber
            </Button>
            <Divider
              className={classes.loginOptionItem}
              style={{ width: "60%" }}
              variant="middle"
              light
            />
            <Typography variant="body2" color="initial" fontStyle="italic">
              You do not have an account?
              <Typography
                variant="subtitle2"
                color="primary"
                component={NavLink}
                to="/registers"
              >
                &nbsp;Register
              </Typography>
            </Typography>
          </Grid>
        </BasicPaperLayout>
        {/* <Outlet /> */}
      </Container>
    </Grid>
  );
}
