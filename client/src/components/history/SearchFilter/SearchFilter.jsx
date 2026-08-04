import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchFilter.css";

function SearchFilter() {

  const [active, setActive] = useState("All");

  const filters = [
    "All",
    "Completed",
    "Excellent",
    "Needs Practice",
  ];

  return (

    <div className="search-filter">

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search by company, role or date..."
        />

      </div>

      <div className="filter-buttons">

        {filters.map((filter) => (

          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={
              active === filter
                ? "filter-btn active"
                : "filter-btn"
            }
          >
            {filter}
          </button>

        ))}

      </div>

    </div>

  );
}

export default SearchFilter;