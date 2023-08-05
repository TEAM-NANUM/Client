import React, { useEffect } from 'react';
import OrderItem from './OrderItem';
import "../../styles/OrderList/OrderList.css"

const OrderList = ({orderList, orderTap}) => {

    return (
        <div className='OrderList_container'>
            <div className='OrderList_header'>
                <p>주문내역</p>
                <img src='./img/imgOrderList/orderIcon.svg' alt='주문 내역'/>
            </div>
            {orderList[orderTap] && (orderList[orderTap].map((item, idx) => <OrderItem key={idx} orderItem={item} />))}
        </div>
    );
};

export default OrderList;