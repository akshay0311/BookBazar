import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import "./style.css";
import filter_data from "./dropdown.json";
import Checkbox from '@mui/material/Checkbox';


const CustomFilter = () => {

  const [filterData, setFilterData] = useState<any>(filter_data);

  const handleFilterDropdown = (name: string) => {
    const data = [...filterData];
    data.map((d: any) => {
      if (d.name === name)
        d.selected = !d.selected
    })
    setFilterData(data);
  }

  return (
    <div className="customFilter-root">
      <div className="customFilter-header">
        <FilterListIcon fontSize="large" />
        <span>Filters</span>
      </div>
      <div className="customFilter-body">
        {
          filterData.map((filter: any) => (
            <div className="customFilter-item" key = {filter.id}>
              <div>
                <span>{filter.name}</span>
                {
                  filter.selected === false ?
                    <span className="customFilter-item-icon" onClick={() => handleFilterDropdown(filter.name)}><KeyboardArrowDownIcon/></span>
                    :
                    <span className="customFilter-item-icon" onClick={() => handleFilterDropdown(filter.name)}><KeyboardControlKeyIcon/></span>
                }
              </div>
              <div className="customFilter-item-option">
                {
                  filter.selected &&
                  filter.options.map((option: any) =>
                    <div key = {option.id}>
                      <Checkbox size="small" />
                      <span>{option.name}</span>
                    </div>
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CustomFilter;
