import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import CenterFluidLayout from "components/layouts/CenterFluidLayout";
import BasicPaperLayout from "components/layouts/BasicPaperLayout";
import React from "react";

function NotFoundPage() {
  return (
    <CenterFluidLayout>
      <Container maxWidth="xs">
        <BasicPaperLayout
          headerText="Not found"
          headerIcon={<ErrorOutlineOutlinedIcon color="primary" />}
        >
          <Typography variant="h5" component="h1" align="center">
            NOT FOUND!
          </Typography>
        </BasicPaperLayout>
      </Container>
    </CenterFluidLayout>
  );
}

export default NotFoundPage;
