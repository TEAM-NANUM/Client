import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Main/PopularItem.css";

const PopularItem = ({ PROXY }) => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${PROXY}/api/products`, {
                params: {
                    sort: "popular",
                    limit: 6,
                },
            })
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [PROXY])

    function chunkArray(arr, chunkSize) {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    }

    return (
        <div className="PopularItem_container">
            <div className="PopularItem_header">
                <div className="PopularItem_title">인기상품</div>
                <img src="./img/imgMain/item_icon.png" alt="상품아이콘" />
                <div className="PopularItem_more">
                    <img src="./img/imgMain/more.png" alt="더보기" />
                </div>
            </div>
            <div className="PopularItem_list">
                {chunkArray(products, 3).map((chunk, index) => (
                    <div key={index} className="PopularItem_list">
                        {chunk.map(product => (
                            <img key={product.id} src={product.imgUrl} alt={product.name} onClick={() => { navigate(`/productDetail/${product.id}`) }} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularItem;