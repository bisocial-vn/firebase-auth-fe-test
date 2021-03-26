import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Box, Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function LoginsPage() {
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
        <Paper>
          <Box p={4} marginBottom={2}>
            <Button
              variant="outlined"
              color="primary"
              component={NavLink}
              to="phonenumber"
              fullWidth
            >
              Login with phonenumber
            </Button>
          </Box>
        </Paper>
        {/* <Outlet /> */}
      </Container>
    </Grid>
  );
}
