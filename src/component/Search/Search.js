import React from "react";
import "./Search.css";

const Search = (props) => {
  console.log(props);
  return (
    <div className="search">
      <div> Search a Currency</div>
      <input
        className="searchbar"
        placeholder="search..."
        type="search"
        onChange={(e) => props.handleSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
