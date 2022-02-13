import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/api";
import { Grid } from "@mui/material";
import CategoriesList from "./../components/CategoriesList";
import Search from "../components/Search";
import { useSearchParams } from "react-router-dom";
import Preloader from "./../components/Preloader";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (searchText) => {
    setSearchParams({ search: searchText });
    setFilteredCategories(
      categories.filter((category) =>
        category.strCategory.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetchCategories().then((response) => {
      if (response.categories) {
        setCategories(response.categories);
        const searchText = searchParams.get("search");
        setFilteredCategories(
          searchText
            ? response.categories.filter((category) =>
                category.strCategory
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            : response.categories
        );
      }
    });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} xl={12} md={12} lx={12} xs={12} textAlign="center">
        <Search
          initialValue={searchParams.get("search")}
          handleSearch={handleSearch}
        />
      </Grid>
      {categories.length > 0 ? (
        <Grid item lg={12} xl={12} md={12} lx={12} xs={12}>
          <CategoriesList categories={filteredCategories} />
        </Grid>
      ) : (
        <Preloader />
      )}
    </Grid>
  );
};

export default HomePage;
