import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Main/PopularItem.css";

const PopularItem = ({ PROXY }) => {
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
    }, [PROXY]);

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
                <div className="PopularItem_list">
                    {products.map(product => (
                        <img src={product.imgUrl}></img>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularItem;