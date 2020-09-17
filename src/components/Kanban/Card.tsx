import React from "react";
import { Card, Typography } from "@material-ui/core";

type CardProps = {
  name: string;
  points: number;
  assigned?: string;
};

const KanbanCard = ({ name, points, assigned }: CardProps) => {
  return (
    <Card>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="subtitle1">{points} pts</Typography>
      <Typography>{assigned ? `${assigned}` : "not assigned."}</Typography>
    </Card>
  );
};

export default KanbanCard;
