import React from "react";
import { Outlet, NavLink as RouterLink } from "react-router-dom";
import {
  Grid,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Divider,
} from "@material-ui/core";
import Lock from "@material-ui/icons/Lock";
import BasicPaperLayout from "components/layouts/BasicPaperLayout";

function HomePage() {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="nowrap"
      >
        <AppBar position="sticky" color="default">
          <Toolbar>
            <Container maxWidth="lg">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" component="h1" color="primary">
                  Firebase Auth test
                </Typography>
                <Box display="inline-flex" justifyContent="space-between">
                  <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/logins"
                  >
                    Login
                  </Button>
                  <Divider
                    variant="middle"
                    orientation="vertical"
                    flexItem
                    light
                    style={{ margin: "0px 8px" }}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    component={RouterLink}
                    to="/registers"
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Box marginTop={2}>
            <Typography variant="body1" color="initial" align="center">
              Firebase Auth test
            </Typography>
          </Box>
          <BasicPaperLayout headerText="test paper" HeaderIcon={Lock}>
            <Typography variant="h1" color="initial">
              test pAper basic layout
            </Typography>
          </BasicPaperLayout>
          <Outlet />
        </Container>
      </Grid>
    </>
  );
}

export default HomePage;
