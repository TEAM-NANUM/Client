import react from "react";
import "../../styles/Product/ProductSelectPopUp.css"

const ProductSelectPopUp = ({ onDeleteClick }) => {
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
                    <div className="Product_name">못난이 감자 1Kg</div>
                    <div className="ProductSelectPopUp_type">수량</div>
                    <div className="Quantity_plus_bar">+</div>
                    <div className="Quantity_bar">10</div>
                    <div className="Quantity_minus_bar">-</div>
                </div>
            </div>
            <div className="ProductSelectPopUp_bottom">
                <div className="ProductSelectPopUp_bottom_inner">
                    <div className="ProductSelectPopUp_bottom_coment">본 상품은 택배 배송입니다.</div>
                    <img src="../img/imgProduct/localShopping_icon.png" alt="택배아이콘"></img>
                    <div className="ProductSelectPopUp_bottom_purchase_buttom">구매하기</div>
                </div>
            </div>
        </div>
    )
}

export default ProductSelectPopUp;