import { Routes, Route } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <Box>
      <Header />
      <Box sx={{ p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
