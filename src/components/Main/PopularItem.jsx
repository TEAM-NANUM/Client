import react, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Main/PopularItem.css"

const PopularItem = ({ PROXY }) => {

    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`${PROXY}/api/products`, {
            params: {
                sort: "popular",
                limit: 6,
            }
        })
            .then(res => {
                setProduct(res.data.products)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });

    }, [])


    return (
        <div className="PopularItem_container">
            <div className="PopularItem_header">
                <div className="PopularItem_title">인기상품</div>
                <img src="./img/imgMain/item_icon.png" alt="상품아이콘"></img>
                <div className="PopularItem_more">
                    <img src="./img/imgMain/more.png" alt="더보기"></img>
                </div>
            </div>
            <div className="PopularItem_list">
                {product.map((product, index) => (
                    <div className="PopularItem" key={index}>
                        <img src={product.imgUrl} alt={product.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularItem;