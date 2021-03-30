import CenterFluidLayout from "components/layouts/CenterFluidLayout";
import React from "react";
import Container from "@material-ui/core/Container";
import BasicPaperLayout from "components/layouts/BasicPaperLayout";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Typography from "@material-ui/core/Typography";
import { firebaseAuth } from "firebases/FirebaseIndex";

function FirebaseActionHandlerPage() {
  const { search } = useLocation();
  const parserObj = queryString.parse(search);
  const { mode, oobCode, apiKey, continueUrl, lang } = parserObj;
  if (
    mode === "signIn" &&
    firebaseAuth.isSignInWithEmailLink(window.location.href)
  ) {
    // TODO get email from localStorage or from user if empty
    // TODO then verify
    // firebaseAuth.signInWithEmailLink("email");
  }

  return (
    <>
      <CenterFluidLayout>
        <Container maxWidth="xs">
          <BasicPaperLayout headerText="Firebase action handler">
            Firebase action handler
            {mode === "signIn" && (
              <Typography variant="h1" color="initial">
                Register finish.
              </Typography>
            )}
          </BasicPaperLayout>
        </Container>
      </CenterFluidLayout>
    </>
  );
}

export default FirebaseActionHandlerPage;
