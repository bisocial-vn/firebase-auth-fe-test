import Container from "@material-ui/core/Container";
import EmailVerifyConfirm from "components/EmailRegister/EmailVerifyConfirm";
import BasicPaperLayout from "components/layouts/BasicPaperLayout";
import CenterFluidLayout from "components/layouts/CenterFluidLayout";
import { firebaseAuth } from "firebases/FirebaseIndex";
import React from "react";
import { useNavigate } from "react-router-dom";

function FirebaseActionHandlerPage() {
  // const { search } = useLocation();
  // const parserObj = queryString.parse(search);
  // const { mode, oobCode, apiKey, continueUrl, lang } = parserObj;
  const navigate = useNavigate();

  const emailForRegister = localStorage.getItem("EMAIL_FOR_REGISTER");

  const registerWithEmail = async (email) => {
    const idToken = await firebaseAuth
      .signInWithEmailLink(email)
      .then((res) => {
        const firebaseIdToken = res.user.getIdToken(true);
        console.log(firebaseIdToken);
        console.log(res.user);
        return firebaseIdToken;
        // TODO send firebaseIdToken to backend
      })
      .catch((err) => console.log(err));
    return idToken;
  };

  React.useEffect(() => {
    if (!firebaseAuth.isSignInWithEmailLink(window.location.href)) {
      navigate("/notfound");
    }
    if (emailForRegister) {
      // const firebaseIdToken = await registerWithEmail(emailForRegister);
      registerWithEmail(emailForRegister);
    }
  }, [emailForRegister, navigate]);

  // if (
  //   mode === "signIn" &&
  //   firebaseAuth.isSignInWithEmailLink(window.location.href)
  // ) {
  // TODO get email from localStorage or from user if empty
  // TODO then verify
  // firebaseAuth.signInWithEmailLink("email");
  // }

  return (
    <>
      <CenterFluidLayout>
        <Container maxWidth="xs">
          <BasicPaperLayout headerText="Firebase action handler">
            <EmailVerifyConfirm />
          </BasicPaperLayout>
        </Container>
      </CenterFluidLayout>
    </>
  );
}

export default FirebaseActionHandlerPage;
