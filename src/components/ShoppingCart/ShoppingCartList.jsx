import react, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/ShoppingCart/ShoppingCartList.css"

const ShoppingCartList = ({ PROXY, shoppingCart, setShoppingCart, isSelected, handleToggleSelect, setSelectedItems }) => {

    const navigate = useNavigate();

    const handleUpdate = useCallback(async (count) => {
        if (shoppingCart.quantity + count <= 0) { return; }

        axios.patch(`${PROXY}/api/cart`, {
            id: shoppingCart.id,
            quantity: shoppingCart.quantity + count,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            }
        }).then((res) => setShoppingCart(res.data.items)).catch((err) => console.log(err))
    }, [shoppingCart.quantity, shoppingCart.id, PROXY])

    const handleDelete = useCallback(async () => {
        axios.post(`${PROXY}/api/cart/delete`, {
            item_ids: [shoppingCart.id]
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            }
        }).then((res) => {
            setShoppingCart(res.data.items)
            setSelectedItems([])
        }).catch((err) => console.log(err))
    }, [setShoppingCart, shoppingCart.quantity, shoppingCart.id, PROXY])

    return (
        <div className="ShoppingCartList_content">
            <div className="opt_btn_wrapper">
                <img style={{ marginLeft: "15px", cursor: "pointer" }} src={`./img/imgs/cartSelect${isSelected ? "On" : "Off"}Icon.svg`} onClick={() => handleToggleSelect(shoppingCart.id)} alt='select' />
            </div>
            <img className="cart_product_img" src={shoppingCart.imgUrl} alt="상품이미지" onClick={() => { navigate(`/productDetail/${shoppingCart.productId}`) }}></img>
            <div className="Product_detail_info">
                <div className="Product_name" onClick={() => { navigate(`/productDetail/${shoppingCart.productId}`) }} >{shoppingCart.name}</div>
                <div className="Product_price">{shoppingCart.totalPrice.toLocaleString()}원</div>
                <div className="quantity_update_bar">
                    <img src="../img/imgShoppingCart/minus.svg" alt="-" onClick={() => handleUpdate(-1)} />
                    <div className="quantity_bar">{shoppingCart.quantity}</div>
                    <img src="../img/imgShoppingCart/plus.svg" alt="+" onClick={() => handleUpdate(1)} />
                </div>
            </div>
            <div className="opt_btn_wrapper" style={{ marginTop: "10px", marginLeft: "auto", marginRight: "12px" }} onClick={handleDelete}>
                <img src="../img/imgShoppingCart/remove.svg" alt="닫기"></img>
            </div>
        </div>
    )
}

export default ShoppingCartList;