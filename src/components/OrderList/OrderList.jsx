import React from 'react';
import OrderItem from './OrderItem';
import "../../styles/OrderList/OrderList.css"

const OrderList = ({ orderList }) => {
    const selectedOrderList = orderList || []; // orderList[orderTap]이 없는 경우 빈 배열로 초기화

    return (
        <div className='OrderList_container'>
            {selectedOrderList.map((item, idx) => <><OrderItem key={idx} orderItem={item} />{selectedOrderList.length-1 !== idx && <div className='divider' style={{height:"2px"}}></div>}</>)}
            {selectedOrderList.length === 0 ? <p style={{
                    fontSize: "12px",
                    color: "gray",
                    display: "flex",
                    marginTop: "40px",
                    justifyContent: "center"
                }}>주문이 없어요.</p>: ""}
        </div>
    );
};

export default OrderList;