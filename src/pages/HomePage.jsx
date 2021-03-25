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
} from "@material-ui/core";

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
                  <Button variant="outlined" color="primary">
                    <RouterLink to="/logins">Login</RouterLink>
                  </Button>
                  {/* <Divider style={{ margin: "0px 8px" }} /> */}
                  {/* <Button variant="outlined" color="default">
                      <RouterLink to="/registers">Register</RouterLink>
                    </Button> */}
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
          <Outlet />
        </Container>
      </Grid>
    </>
  );
}

export default HomePage;
