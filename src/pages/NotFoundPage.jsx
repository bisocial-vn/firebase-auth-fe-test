import React from "react";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <Typography variant="body1" color="initial">
        Not found!
      </Typography>
      <NavLink to="/">Homepage</NavLink>
    </div>
  );
}

export default NotFoundPage;
