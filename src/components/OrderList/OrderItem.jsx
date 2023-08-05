import React from 'react';
import "../../styles/OrderList/OrderItem.css";

const OrderItem = ({orderItem}) => {

    console.log(orderItem)

    return (
        <div className='OrderItem_container'>
            <div className='OrderItem_img'><img src='./img/imgs/icon_logo.svg' alt='상품 사진'/></div>
            <div className='OrderItem_content'>
                <div className='OrderItem_customer'>To. {orderItem.customer}</div>
                <div className='ItemInfo'>
                    <p>상품정보</p>
                    <img src='./img/imgOrderList/ItemInfo.svg' alt='상품 정보'/>
                </div>
                <div className='OrderItem_name'>{orderItem.name}</div>
                <div className='OrderItem_bottom'>
                    <div className='OrderItem_quantity_box'>
                        <div className='OrderItem_quantity'>수량 &nbsp;</div>
                        <div className='OrderItem_quantity_num'>{orderItem.quantity}</div>
                    </div>
                    <div className='OrderItem_price_box'>
                        <div className='OrderItem_price'>가격 &nbsp;</div>
                        <div className='OrderItem_price_num'>{orderItem.total_price}</div>
                    </div>
                    <div className={(orderItem.status === "배송 완료") ? "OrderItem_status_green" : ((orderItem.status === "결제 완료") ? "OrderItem_status_black" : "OrderItem_status_red")}>{orderItem.status}</div>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;