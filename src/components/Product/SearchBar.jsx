import react from "react";
import "../../styles/Product/SearchBar.css";

const SearchBar = () => {
    return (
        <div className="SearchBar_container">
            <img src="./img/imgProduct/search.png" alt="검색"></img>
            <input className="SearchBar"></input>
        </div>
    )
}

export default SearchBar;