import react from "react";
import "../../styles/ShoppingCart/ShoppingCartList.css"

const ShoppingCartList = () => {
    return (
        <div className="ShoppingCartList_container">
            <div className="ShoppingCartList_top">
                <div className="ShoppingCartList_top_left">
                    <div className="ShoppingCartList_select_circle"></div>
                    <div className="Product_info">상품정보</div>
                    <img src="./img/imgShoppingCart/ProductInfo_icon.png" alt="상품정보 아이콘"></img>
                </div>
                <div className="ShoppingCartList_delete">X</div>
            </div>
            <div className="ShoppingCartList_content">
                <img src="./img/imgShoppingCart/potato.png" alt="상품이미지"></img>
                <div className="Product_detail_info">
                    <div className="Product_name">싱싱한 햇감자 1Kg</div>
                    <div className="quantity">수량</div>
                    <div className="quantity_info">
                        <div className="Product_quantity">1개</div>
                        <div className="quantity_update_bar">
                            <div className="plus_bar">+</div>
                            <div className="quantity_bar">1</div>
                            <div className="minus_bar">-</div>
                        </div>
                        <div className="update_button">수정</div>
                    </div>
                    <div className="price_info">
                        <div className="price">가격</div>
                        <div className="Product_price">30,000원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartList;