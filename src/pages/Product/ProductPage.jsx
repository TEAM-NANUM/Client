import React from 'react';
import "../../styles/Product/ProductPage.css"
import SearchBar from "../../components/Product/SearchBar";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";

const ProductPage = () => {
    return (
        <div className='ProductPage_container'>
            <SearchBar></SearchBar>
            <div className='ProductPage_top'>
                <div className='ProductPaeg_top_left'>
                    <div>제철과일</div>
                    <img src='./img/imgProduct/item_icon.png' alt='상품아이콘'></img>
                </div>
                <div className='ProductPage_top_right'>정렬하기</div>
            </div>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Footer></Footer>
        </div>
    );
};

export default ProductPage;