import { Grid } from "@mui/material";
import React from "react";
import MealsItem from "./MealsItem";

const MealsList = (props) => {
  const { meals = [] } = props;

  return (
    <Grid container spacing={3}>
      {meals.map((meal) => (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={meal.idCategory}>
          <MealsItem {...meal} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MealsList;
