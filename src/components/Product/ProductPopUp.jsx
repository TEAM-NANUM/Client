import react, { useCallback } from "react";
import axios from "axios";
import "../../styles/Product/ProductPopUp.css"

const ProductPopUp = ({ PROXY, id, onPurchaseClick, onReviewClick }) => {

    const handleSubmit = useCallback(async () => {
        try {
            await axios({
                method: 'post',
                url: `${PROXY}/api/cart`
                ,
                data: {
                    id: id,
                    quantity: 1
                }
            })
            window.alert("장바구니에 추가되었습니다..");
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className="ProductPopUp_container">
            <div className="ProductPopUp_inner">
                <div className="ProductPopUp_coment">본 상품은 택배 배송입니다.</div>
                <img src="../img/imgProduct/localShopping_icon.png" alt="택배아이콘"></img>
                <div className="ProductPopUp_thumb_up" onClick={onReviewClick}>
                    <img src="../img/imgProduct/thumbUp_icon.png" alt="좋아요아이콘"></img>
                </div>
                <div className="ProductPopUp_ShoppingCart" onClick={handleSubmit}>
                    <img src="../img/imgProduct/ShoppingCart_icon.png" alt="장바구니아이콘"></img>
                </div>
                <div className="ProductPopUp_purchase_buttom" onClick={onPurchaseClick}>구매하기</div>
            </div>
        </div>
    )
}

export default ProductPopUp;