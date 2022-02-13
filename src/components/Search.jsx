import { Button, InputBase } from "@mui/material";
import React, { useState } from "react";
import s from "./components.module.css";

const Search = ({ initialValue = "", handleSearch = Function.prototype }) => {
  const [value, setValue] = useState(initialValue);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const onSearch = () => {
    handleSearch(value);
  };

  return (
    <div>
      <InputBase
        classes={{ root: s.searchInput }}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Поиск"
        onKeyDown={handleKey}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        className={s.searchButton}
        onClick={() => {
          onSearch();
        }}
      >
        Поиск
      </Button>
    </div>
  );
};

export default Search;
