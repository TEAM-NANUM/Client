import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Main/NewItem.css"

const NewItem = ({ PROXY }) => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${PROXY}/api/products`, {
                params: {
                    sort: "recent",
                    limit: 6,
                },
            })
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }, [PROXY]);

    function chunkArray(arr, chunkSize) {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    }

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
                {chunkArray(products, 3).map((chunk, index) => (
                    <div key={index} className="NewItem_list">
                        {chunk.map(product => (
                            <img key={product.id} src={product.imgUrl} alt={product.name} onClick={() => { navigate(`/productDetail/${product.id}`) }} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewItem;