import React from "react";
import { CircularProgress } from "@mui/material";
import s from "./components.module.css";

const Preloader = () => {
  return <CircularProgress className={s.preloader} />;
};

export default Preloader;
