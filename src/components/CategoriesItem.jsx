import {
  CardMedia,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./components.module.css";

const CategoriesItem = (props) => {
  const { strCategory = "", strCategoryThumb = "" } = props;

  return (
    <Card component={NavLink} to={`/category/${strCategory}`}>
      <CardActionArea classes={{ root: s.card }}>
        <CardContent>
          <CardMedia
            component="img"
            image={strCategoryThumb}
            className={s.cardImage}
          />
          <Typography
            variant="subtitle1"
            component="div"
            gutterBottom
            className={s.title}
            textAlign="center"
          >
            {strCategory}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoriesItem;
