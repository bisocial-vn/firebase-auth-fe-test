import {
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import BasicPaperLayout from "components/layouts/BasicPaperLayout";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  regOptionItem: {
    margin: theme.spacing(1),
  },
}));

function RegistersPage() {
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
          headerText="REGISTERS"
          headerIcon={<AccountBoxIcon color="primary" />}
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
              className={classes.regOptionItem}
              variant="outlined"
              color="primary"
              fullWidth
              component={NavLink}
              to="google"
              startIcon={<GTranslateIcon />}
            >
              Register with google
            </Button>
            <Button
              className={classes.regOptionItem}
              variant="outlined"
              color="primary"
              fullWidth
              component={NavLink}
              to="email"
              startIcon={<MailOutlineIcon />}
            >
              Register with email
            </Button>
            <Button
              className={classes.regOptionItem}
              variant="outlined"
              color="primary"
              fullWidth
              component={NavLink}
              to="phonenumber"
              startIcon={<MobileFriendlyIcon />}
            >
              Register with mobile phone
            </Button>
            <Divider
              className={classes.regOptionItem}
              style={{ width: "80%" }}
              variant="middle"
              light
            />
            <Typography variant="body2" color="initial" fontStyle="italic">
              Already have an account?
              <Typography
                variant="subtitle2"
                color="primary"
                component={NavLink}
                to="/logins"
              >
                &nbsp;Login
              </Typography>
            </Typography>
          </Grid>
        </BasicPaperLayout>
        {/* <Outlet /> */}
      </Container>
    </Grid>
  );
}

export default RegistersPage;
