import React from 'react'
import { BsSearch } from "react-icons/bs";
import "../../../styles/searchbar.css"


const SearchBar = () => {
  return (
    <div>
        <input type="text" placeholder="Search shop Here" id="appointment_search" />
            
            <span id="appointment_search" className="search_slot"> <BsSearch />Search Here </span>
    </div>
  )
}

export default SearchBar;