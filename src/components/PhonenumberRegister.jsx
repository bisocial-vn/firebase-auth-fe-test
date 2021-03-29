import { Typography } from "@material-ui/core";
import "firebase/auth";
import React from "react";
import { firebaseAuth } from "../firebases/FirebaseIndex";
import BasicPaperLayout from "./layouts/BasicPaperLayout";
import PhonenumberSendCode from "./PhonenumberRegister/PhonenumberSendCode";
import PhonenumberVerifyCode from "./PhonenumberRegister/PhonenumberVerifyCode";

const VN_COUNTRY_PHONE_PREFIX = "+84";

function PhonenumberRegister() {
  const [confirmResultFn, setConfirmResultFn] = React.useState(undefined);
  const [err, setErr] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const onSendingCode = (data) => {
    setLoading(true);
    console.log(data);
    let phoneStr = VN_COUNTRY_PHONE_PREFIX + data.phone;
    firebaseAuth
      .signInWithPhoneNumber(phoneStr, window.recaptchaVerifier)
      .then((confirmResult) => {
        console.log(confirmResult);
        setConfirmResultFn(confirmResult);
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <BasicPaperLayout>
      {err && (
        <Typography variant="body2" color="error" align="center">
          {err}
        </Typography>
      )}
      <PhonenumberSendCode onSubmit={onSendingCode} loading={loading} />

      <PhonenumberVerifyCode
        phoneVerifyFn={confirmResultFn}
        showVerifyDialog={confirmResultFn}
      />
    </BasicPaperLayout>
  );
}

export default PhonenumberRegister;
