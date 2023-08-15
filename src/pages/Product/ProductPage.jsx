import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../styles/Product/ProductPage.css"
import SearchBar from "../../components/Product/SearchBar";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";

const ProductPage = ({ PROXY }) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({ products: [] });

    return (
        <div className='ProductPage_container'>
            <SearchBar PROXY={PROXY} setProduct={setProduct}></SearchBar>
            <div className='ProductPage_top'>
                <div className='ProductPaeg_top_left'>
                    <div></div>
                    <img src='./img/imgProduct/item_icon.png' alt='상품아이콘'></img>
                </div>
                <div className='ProductPage_top_right'>정렬하기</div>
            </div>
            <div className='Product_list'>
                {product.products.map((list, idx) =>
                    <div onClick={() => navigate(`/productDetail/${list.id}`)}>
                        <Product list={list}></Product>
                    </div>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductPage;