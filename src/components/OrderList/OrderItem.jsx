import React from 'react';
import "../../styles/OrderList/OrderItem.css";

const OrderItem = ({ orderItem }) => {

    console.log(orderItem);
    return (
        <div className='OrderItem_container'>
            <div className='OrderItem_img'><img src='./img/imgs/icon_logo.svg' alt='상품 사진' /></div>
            <div className='OrderItem_content'>
                <div className='OrderItem_customer'>To. {orderItem.customer}</div>
                <div className='ItemInfo'>
                    <p>상품정보</p>
                    <img src='./img/imgOrderList/ItemInfo.svg' alt='상품 정보' />
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
                    <div className={
                        orderItem.delivery_status === "DELIVERED" ? "OrderItem_status_green" :
                            orderItem.delivery_status === "PAYMENT_COMPLETE" ? "OrderItem_status_black" :
                                "OrderItem_status_red"
                    }>
                        {orderItem.delivery_status === "DELIVERED" ? "배달 완료" :
                            orderItem.delivery_status === "PAYMENT_COMPLETE" ? "결제 완료" :
                                orderItem.delivery_status === "IN_PROGRESS" ? "배달중" :
                                    orderItem.delivery_status}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;