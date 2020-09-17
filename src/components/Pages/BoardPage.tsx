import React from "react";
import Card from "@material-ui/core/Card";
import Page from "./Page";
import { Typography } from "@material-ui/core";

const AboutPage = () => {
  return (
    <Page>
      <Card>
        <Typography variant="h3">Current Kanban Board</Typography>
      </Card>
    </Page>
  );
};

export default AboutPage;
