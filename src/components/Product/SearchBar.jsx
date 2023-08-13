import React, { useState } from "react";
import axios from "axios";
import "../../styles/Product/SearchBar.css";

const SearchBar = ({ PROXY, setProduct }) => {
    const [searchResults, setSearchResults] = useState([]);

    const search = (e) => {
        const searchTerm = e.target.value;

        axios.get(`${PROXY}/api/products?sort=recent`)
            .then(res => {
                const filteredResults = res.data.products.filter(product => product.name.includes(searchTerm));
                setSearchResults(filteredResults);
                setProduct({ products: filteredResults });
            })
            .catch(err => {
                console.error(err);
                setSearchResults([]);
            });
    };

    return (
        <div className="SearchBar_container">
            <img src="./img/imgProduct/search.png" alt="검색"></img>
            <input className="SearchBar" onKeyUp={search}></input>
        </div>
    );
};

export default SearchBar;