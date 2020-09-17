import React from "react";
import Card from "@material-ui/core/Card";
import Page from "./Page";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

const AboutPage = () => {
  let { id } = useParams();
  return (
    <Page>
      <Card>
        <Typography variant="h1">Board {id}</Typography>
      </Card>
    </Page>
  );
};

export default AboutPage;
