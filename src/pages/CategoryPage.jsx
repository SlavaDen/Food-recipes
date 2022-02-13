import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCategory } from "../api/api";
import MealsList from "../components/MealsList";
import Preloader from "../components/Preloader";

const CategoryPage = () => {
  const [meals, setMeals] = useState([]);

  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    fetchCategory(name).then((response) => {
      setMeals(response.meals);
    });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} xl={12} md={12} lx={12} xs={12}>
        <Button
          color="inherit"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </Button>
      </Grid>
      {meals.length ? (
        <Grid item lg={12} xl={12} md={12} lx={12} xs={12}>
          <MealsList meals={meals} />
        </Grid>
      ) : (
        <Preloader />
      )}
    </Grid>
  );
};

export default CategoryPage;
