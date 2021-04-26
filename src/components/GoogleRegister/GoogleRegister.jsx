import React from "react";
import { firebaseAuth, googleAuthProvider } from "firebases/FirebaseIndex";
import { Box, Typography } from "@material-ui/core";

function GoogleRegister() {
  const [status, setStatus] = React.useState("");
  const [err, setErr] = React.useState("");
  React.useEffect(() => {
    firebaseAuth
      .signInWithPopup(googleAuthProvider)
      .then((res) => {
        console.log(res);
        console.log(res.credential);
        setStatus("Success.");
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      });
  }, []);

  return (
    <Box p={2}>
      {err && (
        <Typography variant="body2" color="error" align="center">
          {err}
        </Typography>
      )}
      <Typography variant="h6" color="primary">
        {status}
      </Typography>
    </Box>
  );
}

export default GoogleRegister;
