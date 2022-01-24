import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyFilters } from "../../redux/actions/emailActions";
const Filters = () => {
  const [currentFilter, setCurrentFilter] = useState("");
  const dispatch = useDispatch();

  const handleFilter = (type) => {
    dispatch(applyFilters(type));
    setCurrentFilter(type);
  };

  const filters = ["Unread", "Read", "Favorites"];

  return (
    <div className="filters">
      Filter By:
      {filters.map((filter, index) => (
        <span
          key={index}
          onClick={() => handleFilter(filter.toLowerCase())}
          className={`${
            currentFilter === filter.toLowerCase() ? "selected-filter" : ""
          }`}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default Filters;
