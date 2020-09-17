import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";

type CardProps = {
  name: string;
};

const Section = ({ name }: CardProps) => {
  return (
    <Card>
      <Typography variant="h3">{name}</Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
          {name}
      </Grid>
    </Card>
  );
};

export default Section;
