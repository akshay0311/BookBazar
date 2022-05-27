import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

import "./style.css";

const CustomFilter = () => {
  return (
    <div className="customFilter-root">
      <div className="customFilter-header">
        <FilterListIcon fontSize="large" />
        <span>Filters</span>
      </div>
    </div>
  );
};

export default CustomFilter;
