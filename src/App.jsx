import React, { useState } from "react"
import Header from "./components/Header.jsx"
import FilterSidebar from "./components/FilterSidebar.jsx"
import ProductGrid from "./components/ProductGrid.jsx"
import Footer from "./components/Footer.jsx"
import SortDropdown from "./components/SortDropdown.jsx"
import "./App.css"

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const handleSortChange = (sortOption) => {
    console.log("Selected sort:", sortOption)
  }
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }
  const closeFilter = () => {
    setIsFilterOpen(false)
  }

  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <section className="hero-section">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p className="subtitle">Embrace a curated selection of innovative designs and timeless essentials, meticulously crafted to fit your style. Explore our unique offerings and transform the way you shop forever.</p>
        </section>
        <div className="main-content">
          <FilterSidebar isOpen={isFilterOpen} onClose={closeFilter} />
          <div className="products-section">
            <div className="products-header">
              <span>3425 items</span>
              <button className="toggle-filter" onClick={toggleFilter}>FILTER</button>
              <SortDropdown onSortChange={handleSortChange} />
            </div>
            <ProductGrid />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
