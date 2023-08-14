import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/ShoppingCart/ShoppingCartSelect.css";

const ShoppingCartSelect = ({ PROXY, selectedItems }) => {
    const navigate = useNavigate();

    const handleSelectDelete = async () => {
        try {
            const token = localStorage.getItem("access_token");

            await axios({
                method: "post",
                url: `${PROXY}/api/cart/delete`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    item_ids: selectedItems,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="ShoppingCartSelect_container">
            <div className="select_purchase" onClick={() => navigate("/purchase")}>
                선택 구매
            </div>
            <img src="./img/imgShoppingCart/product.png" alt="상품아이콘"></img>
            <div className="select_delete" onClick={handleSelectDelete}>
                선택 삭제
            </div>
        </div>
    );
};

export default ShoppingCartSelect;