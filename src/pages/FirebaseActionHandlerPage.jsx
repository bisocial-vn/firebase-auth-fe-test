import Container from "@material-ui/core/Container";
import EmailVerifyConfirm from "components/EmailRegister/EmailVerifyConfirm";
import BasicPaperLayout from "components/layouts/BasicPaperLayout";
import CenterFluidLayout from "components/layouts/CenterFluidLayout";
import { firebaseAuth } from "firebases/FirebaseIndex";
import React from "react";
import Typography from "@material-ui/core/Typography";
// import { useNavigate } from "react-router-dom";

function FirebaseActionHandlerPage() {
  // const navigate = useNavigate();

  const [isValidAction, setIsValidAction] = React.useState(false);

  React.useEffect(() => {
    if (firebaseAuth.isSignInWithEmailLink(window.location.href)) {
      setIsValidAction(true);
    }
  }, []);

  // const registerWithEmail = async (email) => {
  //   const idToken = await firebaseAuth
  //     .signInWithEmailLink(email)
  //     .then((res) => {
  //       const firebaseIdToken = res.user.getIdToken(true);
  //       console.log(firebaseIdToken);
  //       console.log(res.user);
  //       return firebaseIdToken;
  //       // TODO send firebaseIdToken to backend
  //     })
  //     .catch((err) => console.log(err));
  //   return idToken;
  // };

  // React.useEffect(() => {
  //   if (!firebaseAuth.isSignInWithEmailLink(window.location.href)) {
  //     navigate("/notfound");
  //   }
  //   if (emailForRegister) {
  //     // const firebaseIdToken = await registerWithEmail(emailForRegister);
  //     registerWithEmail(emailForRegister);
  //   }
  // }, [emailForRegister, navigate]);

  return (
    <>
      <CenterFluidLayout>
        <Container maxWidth="xs">
          <BasicPaperLayout headerText="Finish register action handler">
            {isValidAction ? (
              <EmailVerifyConfirm />
            ) : (
              <Typography variant="body1" color="error">
                Invalid action.
              </Typography>
            )}
          </BasicPaperLayout>
        </Container>
      </CenterFluidLayout>
    </>
  );
}

export default FirebaseActionHandlerPage;
