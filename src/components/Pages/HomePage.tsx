import React from "react";
import Page from "./Page";
import { Typography, Container, Card } from "@material-ui/core";

const HomePage = () => {
  return (
    <Page>
      <Container maxWidth="sm" component="main">
        <Card>
          <Typography variant="h2">
            Welcome {localStorage.getItem("user")}
          </Typography>

          <Typography variant="h5">
            This is just a super basic material-ui based react project I threw
            together, for a ctf.
          </Typography>
        </Card>
      </Container>
    </Page>
  );
};

export default HomePage;
