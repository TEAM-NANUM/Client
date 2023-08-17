import React from 'react';
import OrderItem from './OrderItem';
import "../../styles/OrderList/OrderList.css"

const OrderList = ({ orderList, orderTap }) => {
    const selectedOrderList = orderList || []; // orderList[orderTap]이 없는 경우 빈 배열로 초기화

    if (!Array.isArray(selectedOrderList)) {
        // selectedOrderList가 배열이 아닌 경우에 대한 처리
        console.error(`Selected order list for "${orderTap}" is not an array.`);
        return null; // 또는 원하는 UI를 반환
    }

    return (
        <div className='OrderList_container'>
            <div className='OrderList_header'>
                <p>주문내역</p>
                <img src='./img/imgOrderList/orderIcon.svg' alt='주문 내역' />
            </div>
            {selectedOrderList.map((item, idx) => <OrderItem key={idx} orderItem={item} />)}
        </div>
    );
};

export default OrderList;