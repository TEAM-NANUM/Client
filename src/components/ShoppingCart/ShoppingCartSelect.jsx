import react from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ShoppingCart/ShoppingCartSelect.css";

const ShoppingCartSelect = () => {
    const navigate = useNavigate();

    return (
        <div className="ShoppingCartSelect_container">
            <div className="select_purchase" onClick={() => { navigate('/purchase') }}>선택 구매</div>
            <img src="./img/imgShoppingCart/product.png" alt="상품아이콘"></img>
            <div className="select_delete">선택 삭제</div>
        </div>
    )
}

export default ShoppingCartSelect;