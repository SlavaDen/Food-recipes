import { Grid } from "@mui/material";
import React from "react";
import CategoriesItem from "./CategoriesItem";

const CategoriesList = (props) => {
  const { categories = [] } = props;

  return (
    <Grid container spacing={3}>
      {categories.map((category) => (
        <Grid
          item
          xl={2}
          lg={3}
          md={4}
          sm={6}
          xs={12}
          key={category.idCategory}
        >
          <CategoriesItem {...category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoriesList;
