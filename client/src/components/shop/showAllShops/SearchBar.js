import React from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { searchAllShopAction } from "../../../redux/action/allShopsAction";
import "../../../styles/searchbar.css";
const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="search_bar">
        
      <input
        type="text"
        placeholder="Search shops"
        id="appointment_search"
        onChange={(e) => dispatch(searchAllShopAction(e.target.value))}
      />      
  
    </div>
  );
};

export default SearchBar;
