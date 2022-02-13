import {
  CardMedia,
  Card,
  CardContent,
  Chip,
  Box,
  CardActionArea,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./components.module.css";

const MealsItem = (props) => {
  const { idMeal = "", strMeal = "", strMealThumb = "" } = props;

  return (
    <Card component={NavLink} to={`/recipe/${idMeal}`}>
      <CardActionArea classes={{ root: s.card }}>
        <CardContent>
          <CardMedia component="img" image={strMealThumb} />
          <Typography
            variant="subtitle1"
            component="div"
            gutterBottom
            className={s.title}
            textAlign="center"
          >
            {strMeal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MealsItem;
