import { Grid } from "@material-ui/core";
import React from "react";

function CenterFluidLayout(props) {
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
      {props.children}
    </Grid>
  );
}

export default CenterFluidLayout;
