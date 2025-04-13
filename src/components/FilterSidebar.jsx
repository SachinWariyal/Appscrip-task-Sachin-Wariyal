import React, { useState } from "react"
import "./FilterSidebar.css"

function FilterSidebar({ isOpen, onClose }) {
  const [openFilter, setOpenFilter] = useState({
    customizable: true,
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false
  })
  const toggleFilter = (filterName) => {
    setOpenFilter((prev) => ({
      ...prev,
      [filterName]: !prev[filterName]
    }))
  }

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <div className="filter-group">
        <button className="filter-header" onClick={() => toggleFilter("customizable")}>
          CUSTOMIZABLE
          <span className="arrow-icon">{openFilter.customizable ? "–" : "+"}</span>
        </button>
        {openFilter.customizable && (
          <div className="filter-content">
            <label>
              <input type="checkbox" /> Yes
            </label>
          </div>
        )}
      </div>
      <div className="filter-group">
        <button className="filter-header" onClick={() => toggleFilter("idealFor")}>
          IDEAL FOR
          <span className="arrow-icon">{openFilter.idealFor ? "–" : "+"}</span>
        </button>
        {openFilter.idealFor && (
          <div className="filter-content">
            <p className="all-option">All</p>
            <label>
              <input type="checkbox" /> Men
            </label>
            <label>
              <input type="checkbox" /> Women
            </label>
            <label>
              <input type="checkbox" /> Baby &amp; Kids
            </label>
          </div>
        )}
      </div>
      <div className="filter-group">
        <button className="filter-header" onClick={() => toggleFilter("occasion")}>
          OCCASION
          <span className="arrow-icon">{openFilter.occasion ? "–" : "+"}</span>
        </button>
        {openFilter.occasion && (
          <div className="filter-content">
            <p className="all-option">All</p>
            <label>
              <input type="checkbox" /> Casual
            </label>
            <label>
              <input type="checkbox" /> Formal
            </label>
            <label>
              <input type="checkbox" /> Party
            </label>
          </div>
        )}
      </div>
      <div className="filter-group">
        <button className="filter-header" onClick={() => toggleFilter("work")}>
          WORK
          <span className="arrow-icon">{openFilter.work ? "–" : "+"}</span>
        </button>
        {openFilter.work && (
          <div className="filter-content">
            <p className="all-option">All</p>
            <label>
              <input type="checkbox" /> Office
            </label>
            <label>
              <input type="checkbox" /> Outdoor
            </label>
          </div>
        )}
      </div>
      <div className="filter-group">
        <button className="filter-header" onClick={() => toggleFilter("fabric")}>
          FABRIC
          <span className="arrow-icon">{openFilter.fabric ? "–" : "+"}</span>
        </button>
        {openFilter.fabric && (
          <div className="filter-content">
            <p className="all-option">All</p>
          </div>
        )}
      </div>
      <div className="filter-group">
        <button className="filter-header" onClick={() => toggleFilter("segment")}>
          SEGMENT
          <span className="arrow-icon">{openFilter.segment ? "–" : "+"}</span>
        </button>
        {openFilter.segment && (
          <div className="filter-content">
            <p className="all-option">All</p>
          </div>
        )}
      </div>
      <div className="filter-group">
        <button className="filter-header" onClick={() => toggleFilter("suitableFor")}>
          SUITABLE FOR
          <span className="arrow-icon">{openFilter.suitableFor ? "–" : "+"}</span>
        </button>
        {openFilter.suitableFor && (
          <div className="filter-content">
            <p className="all-option">All</p>
          </div>
        )}
      </div>
      <div className="filter-group">
        <button className="filter-header" onClick={() => toggleFilter("rawMaterials")}>
          RAW MATERIALS
          <span className="arrow-icon">{openFilter.rawMaterials ? "–" : "+"}</span>
        </button>
        {openFilter.rawMaterials && (
          <div className="filter-content">
            <p className="all-option">All</p>
          </div>
        )}
      </div>
      <div className="filter-group">
        <button className="filter-header" onClick={() => toggleFilter("pattern")}>
          PATTERN
          <span className="arrow-icon">{openFilter.pattern ? "–" : "+"}</span>
        </button>
        {openFilter.pattern && (
          <div className="filter-content">
            <p className="all-option">All</p>
          </div>
        )}
      </div>
    </aside>
  )
}

export default FilterSidebar
