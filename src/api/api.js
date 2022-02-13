import { API_URL } from "../config";

const fetchCategories = async () => {
  const response = await fetch(`${API_URL}categories.php`);

  return await response.json();
};

const fetchCategory = async (name) => {
  const response = await fetch(`${API_URL}filter.php?c=${name}`);

  return await response.json();
};

const fetchMealById = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await response.json();
};

export { fetchCategories, fetchCategory, fetchMealById };
