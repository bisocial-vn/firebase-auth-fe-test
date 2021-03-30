import React from "react";
import { Container } from "@material-ui/core";
import BasicPaperLayout from "components/layouts/BasicPaperLayout";
import CenterFluidLayout from "components/layouts/CenterFluidLayout";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import EmailSendVerifyLink from "components/EmailRegister/EmailSendVerifyLink";

function EmailRegisterPage() {
  return (
    <CenterFluidLayout>
      <Container maxWidth="xs">
        <BasicPaperLayout
          headerText="EMAIL REGISTER"
          headerIcon={<MailOutlineIcon color="primary" />}
        >
          <EmailSendVerifyLink />
        </BasicPaperLayout>
      </Container>
    </CenterFluidLayout>
  );
}

export default EmailRegisterPage;
