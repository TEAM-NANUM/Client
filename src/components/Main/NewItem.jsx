import react, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Main/NewItem.css"

const NewItem = ({ PROXY }) => {

    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`${PROXY}/api/products`, {
            params: {
                sort: "recent",
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
        <div className="NewItem_container">
            <div className="NewItem_header">
                <div className="NewItem_title">최근 등록된 상품</div>
                <div className="NewItem_title_new">New</div>
                <img src="./img/imgMain/item_icon.png" alt="상품아이콘"></img>
                <div className="NewItem_more">
                    <img src="./img/imgMain/more.png" alt="더보기"></img>
                </div>
            </div>
            <div className="NewItem_list">

            </div>
        </div>
    )
}

export default NewItem;