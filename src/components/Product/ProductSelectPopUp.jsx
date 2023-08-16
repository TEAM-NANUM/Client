import react, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/Product/ProductSelectPopUp.css"

const ProductSelectPopUp = ({ PROXY, id, product, onDeleteClick }) => {

    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        axios.get(`${PROXY}/api/orders/user`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        })
            .then((res) => {
                setUserInfo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handlePlusClick = () => {
        setQuantity(quantity + 1);
    };

    const handleMinusClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePurchaseClick = () => {
        if (userInfo === null) {
            navigate('/address');
        } else {
            navigate(`/purchase/${id}`, { state: { quantity: quantity } });
        }
    };

    return (
        <div className="ProductSelectPopUp_container">
            <div className="ProductSelectPopUp_top">
                <div className="ProductSelectPopUp_top_delete">
                    <img src="../img/imgProduct/ProductInfo.png"></img>
                    <div className="ProductSelectPopUp_delete" onClick={onDeleteClick}>
                        <img src="../img/imgProduct/close.png"></img>
                    </div>
                </div>
                <div className="ProductSelectPopUp_top_content">
                    <div className="ProductSelectPopUp_type">제품명</div>
                    <div className="Product_name">{product.name}</div>
                    <div className="ProductSelectPopUp_type">수량</div>
                    <div className="Quantity_plus_bar" onClick={handlePlusClick}>+</div>
                    <div className="Quantity_bar">{quantity}</div>
                    <div className="Quantity_minus_bar" onClick={handleMinusClick}>-</div>
                </div>
            </div>
            <div className="ProductSelectPopUp_bottom">
                <div className="ProductSelectPopUp_bottom_inner">
                    <div className="ProductSelectPopUp_bottom_coment">본 상품은 택배 배송입니다.</div>
                    <img src="../img/imgProduct/localShopping_icon.png" alt="택배아이콘"></img>
                    <div className="ProductSelectPopUp_bottom_purchase_buttom" onClick={handlePurchaseClick}>
                        구매하기
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSelectPopUp;