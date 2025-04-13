// src/components/SortDropdown.jsx
import React, { useState } from "react";
import "./SortDropdown.css";

function SortDropdown({ onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsOpen(false);
    if (onSortChange) {
      onSortChange(option);
    }
  };

  return (
    <div className="sort-dropdown">
      <button className="sort-toggle" onClick={toggleDropdown}>
        <span>{selectedSort}</span>
        <span className="arrow-icon">▼</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li
            className={selectedSort === "RECOMMENDED" ? "active" : ""}
            onClick={() => handleSortSelect("RECOMMENDED")}
          >
            <span className="checkmark">
              {selectedSort === "RECOMMENDED" ? "✓" : ""}
            </span>
            RECOMMENDED
          </li>
          <li
            className={selectedSort === "NEWEST FIRST" ? "active" : ""}
            onClick={() => handleSortSelect("NEWEST FIRST")}
          >
            <span className="checkmark">
              {selectedSort === "NEWEST FIRST" ? "✓" : ""}
            </span>
            NEWEST FIRST
          </li>
          <li
            className={selectedSort === "POPULAR" ? "active" : ""}
            onClick={() => handleSortSelect("POPULAR")}
          >
            <span className="checkmark">
              {selectedSort === "POPULAR" ? "✓" : ""}
            </span>
            POPULAR
          </li>
          <li
            className={selectedSort === "PRICE : HIGH TO LOW" ? "active" : ""}
            onClick={() => handleSortSelect("PRICE : HIGH TO LOW")}
          >
            <span className="checkmark">
              {selectedSort === "PRICE : HIGH TO LOW" ? "✓" : ""}
            </span>
            PRICE : HIGH TO LOW
          </li>
          <li
            className={selectedSort === "PRICE : LOW TO HIGH" ? "active" : ""}
            onClick={() => handleSortSelect("PRICE : LOW TO HIGH")}
          >
            <span className="checkmark">
              {selectedSort === "PRICE : LOW TO HIGH" ? "✓" : ""}
            </span>
            PRICE : LOW TO HIGH
          </li>
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;
