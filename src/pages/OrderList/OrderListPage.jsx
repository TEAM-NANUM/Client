import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styles/OrderList/OrderListPage.css"
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import OrderList from '../../components/OrderList/OrderList';
import OrderTap from '../../components/OrderList/OrderTap';

const OrderListPage = ({ PROXY }) => {

  const [orderList, setOrderList] = useState({
    "progress_orders": [
      {
        "order_id": "주문 ID 1",
        "customer": "고객 이름",
        "total_price": 25000,
        "status": "결제 완료",
        "name": "싱싱한 햇감자",
        "unit": "5kg",
        "quantity": "5"
      },
      {
        "order_id": "주문 ID 2",
        "customer": "고객 이름",
        "total_amount": 15000,
        "status": "배송중",
        "description": "주문 정보"
      },
    ]
  })

  const [completeOrderList, setCompleteOrderList] = useState({
    "complete_orders": [
      {
        "order_id": "주문 ID 1",
        "customer": "고객 이름",
        "total_price": 25000,
        "status": "결제 완료",
        "name": "싱싱한 햇감자",
        "unit": "5kg",
        "quantity": "5"
      },
      {
        "order_id": "주문 ID 2",
        "customer": "고객 이름",
        "total_amount": 15000,
        "status": "배송중",
        "description": "주문 정보"
      },
    ]
  })

  const [orderTap, setOrderTap] = useState("progress_orders");

  useEffect(() => {
    axios.get(`${PROXY}/api/orders/in-progress`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
    })
      .then((res) => {
        setOrderList(res.data.order_list);
        console.log(res.data.order_list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get(`${PROXY}/api/orders/complete`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
    })
      .then((res) => {
        setCompleteOrderList(res.data.order_list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <SubHeader page={"My 주문내역"} />
      <div className='OrderListPage_container'>
        {orderTap == "progress_orders" ?
          <OrderList orderList={orderList} orderTap={orderTap} />
          : <OrderList orderList={completeOrderList} orderTap={orderTap} />}
      </div>
      <OrderTap setOrderTap={setOrderTap} />
    </>
  );
};

export default OrderListPage;