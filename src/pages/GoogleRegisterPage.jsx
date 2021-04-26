import { Container } from "@material-ui/core";
import GoogleRegister from "components/GoogleRegister/GoogleRegister";
import BasicPaperLayout from "components/layouts/BasicPaperLayout";
import CenterFluidLayout from "components/layouts/CenterFluidLayout";
import React from "react";

function GoogleRegisterPage() {
  return (
    <CenterFluidLayout>
      <Container maxWidth="xs">
        <BasicPaperLayout headerText="REGISTER WITH GOOGLE">
          <GoogleRegister />
        </BasicPaperLayout>
      </Container>
    </CenterFluidLayout>
  );
}

export default GoogleRegisterPage;
