import axios from "axios";
import React, { useState } from 'react';
import './App.css';

function ImageGallery() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const fetchImages = (query) => {
    if (!query.trim()) return;

    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(query)}&client_id=zCJK83CLmA7Hsr2FIdf1KYo-LVXyEFgZee5Ugf-Uozw`
      )
      .then((response) => {
        setResult(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    fetchImages(search);
  };

  const handleCategoryClick = (category) => {
    setSearch(category);      // update input text
    fetchImages(category);    // load images for that category
  };

  return (
    <div className="container">
      <h1>Image Gallery</h1>

      {/* Search + filters in one horizontal row */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search images..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <div className="filters">
          <button onClick={() => handleCategoryClick("all")}>All</button>
          <button onClick={() => handleCategoryClick("nature")}>Nature</button>
          <button onClick={() => handleCategoryClick("people")}>People</button>
        </div>
      </div>

      {/* Horizontal image gallery */}
      <div className="gallery">
        {result.length > 0 &&
          result.map((item, index) => (
            <img
              key={index}
              src={item.urls.small || item.urls.full}
              alt={item.alt_description || "photo"}
            />
          ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ImageGallery />
    </div>
  );
}

export default App;