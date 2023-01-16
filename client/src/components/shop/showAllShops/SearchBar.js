import React from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector,useDispatch } from "react-redux";
 import {searchAllShopAction} from "../../../redux/action/allShopsAction";
const SearchBar = () => {
  const dispatch=useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Search shops"
        id="appointment_search"
        onChange={(e)=>dispatch(searchAllShopAction(e.target.value))}
      />

      <span id="appointment_search" className="search_slot">
        {" "}
        <BsSearch />
        Search Here{" "}
      </span>
    </div>
  );
};

export default SearchBar;
