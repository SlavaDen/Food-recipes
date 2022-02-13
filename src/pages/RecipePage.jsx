import {
  CardMedia,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMealById } from "../api/api";
import s from "../components/components.module.css";

const RecipePage = () => {
  const [recipe, setRecipe] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(recipe.strYoutube);
  useEffect(() => {
    fetchMealById(id).then((response) => {
      if (response.meals) {
        setRecipe(response.meals[0]);
      }
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
      <Grid item lg={4} xl={4} md={12} lx={12} xs={12}>
        <CardMedia component="img" image={recipe.strMealThumb} />
      </Grid>
      <Grid item lg={8} xl={8} md={12} lx={12} xs={12}>
        <Typography variant="h3" gutterBottom>
          {recipe.strMeal}
        </Typography>
        <Typography variant="h6"> Area: {recipe.strArea}</Typography>
        <Typography variant="h6" gutterBottom>
          Category: {recipe.strCategory}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {recipe.strInstructions}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ingredient</TableCell>
                <TableCell>Measure</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <TableRow key={key}>
                      <TableCell>{recipe[key]}</TableCell>
                      <TableCell>
                        {recipe[`strMeasure${key.slice(13)}`]}
                      </TableCell>
                    </TableRow>
                  );
                }
                return null;
              })}
            </TableBody>
          </Table>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RecipePage;
