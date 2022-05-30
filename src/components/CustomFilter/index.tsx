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
          filterData.map((data: any) => (
            <div className="customFilter-item">
              <div>
                <span>{data.name}</span>
                {
                  data.selected === false ?
                    <span className="customFilter-item-icon" onClick={() => handleFilterDropdown(data.name)}><KeyboardArrowDownIcon/></span>
                    :
                    <span className="customFilter-item-icon" onClick={() => handleFilterDropdown(data.name)}><KeyboardControlKeyIcon/></span>
                }
              </div>
              <div className="customFilter-item-option">
                {
                  data.selected &&
                  data.options.map((option: any) =>
                    <div>
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
