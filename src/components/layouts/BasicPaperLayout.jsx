import React from "react";
import { Box, IconButton, Paper, Typography } from "@material-ui/core";
import { ArrowBack, BubbleChart } from "@material-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";

function BasicPaperLayout({ children, headerText, headerIcon }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Paper elevation={24}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="background.default"
      >
        <IconButton aria-label="go back" onClick={goBack} size="medium">
          <ArrowBack />
        </IconButton>
        <Box display="flex" alignContent="center" alignItems="center">
          {headerIcon}
          <Typography variant="h6" component="h1" color="primary">
            &nbsp;{headerText}
          </Typography>
        </Box>
        <Box style={{ visibility: "hidden" }}>
          <IconButton color="primary" component={NavLink} to="/">
            <BubbleChart />
          </IconButton>
        </Box>
      </Box>
      <Box m={2}>{children}</Box>
      <Box bgcolor="background.default" textAlign="center">
        <IconButton color="primary" component={NavLink} to="/" size="medium">
          <BubbleChart fontSize="large" />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default BasicPaperLayout;
