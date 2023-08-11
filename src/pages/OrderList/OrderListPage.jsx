import React, { useEffect, useState } from 'react';
import "../../styles/OrderList/OrderListPage.css"
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import OrderList from '../../components/OrderList/OrderList';
import OrderTap from '../../components/OrderList/OrderTap';

const OrderListPage = () => {

    const [orderList, setOrderList] = useState({
        "progress_orders": [
          {
            "order_id": "주문 ID 1",
            "customer": "고객 이름",
            "total_price": 25000,
            "status": "결제 완료",
            "name" : "싱싱한 햇감자",
                  "unit" : "5kg",
                  "quantity" : "5"
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
        (orderTap === "progress_orders") ? setOrderList({
            "progress_orders": [
              {
                "order_id": "주문 ID 1",
                "customer": "고객 이름",
                "total_price": 25000,
                "status": "결제 완료",
                "name" : "싱싱한 햇감자",
                      "unit" : "5kg",
                      "quantity" : "5"
              },
              {
                "order_id": "주문 ID 2",
                "customer": "고객 이름",
                "total_amount": 15000,
                "status": "배송중",
                "description": "주문 정보"
              },
              {
                "order_id": "주문 ID 1",
                "customer": "고객 이름",
                "total_price": 25000,
                "status": "결제 완료",
                "name" : "싱싱한 햇감자",
                      "unit" : "5kg",
                      "quantity" : "5"
              },
              {
                "order_id": "주문 ID 2",
                "customer": "고객 이름",
                "total_amount": 15000,
                "status": "배송중",
                "description": "주문 정보"
              },
            ]
          }) : setOrderList({
            "complete_orders": [
              {
                "order_id": "주문 ID 1",
                "customer": "고객 이름",
                "total_price": 25000,
                "status": "배송 완료",
                "name" : "싱싱한 햇감자",
                      "unit" : "5kg",
                      "quantity" : "5"
              },
              {
                "order_id": "주문 ID 2",
                "customer": "고객 이름",
                "total_amount": 15000,
                "status": "배송 완료",
                "description": "주문 정보"
              },
              {
                "order_id": "주문 ID 1",
                "customer": "고객 이름",
                "total_price": 25000,
                "status": "배송 완료",
                "name" : "싱싱한 햇감자",
                      "unit" : "5kg",
                      "quantity" : "5"
              },
              {
                "order_id": "주문 ID 2",
                "customer": "고객 이름",
                "total_amount": 15000,
                "status": "배송 완료",
                "description": "주문 정보"
              },
            ]
          })
    }, [orderTap])

    return (
        <>
            <SubHeader page={"My 주문내역"}/>
            <div className='OrderListPage_container'>
                <OrderList orderList={orderList} orderTap={orderTap}/>
            </div>
            <OrderTap setOrderTap={setOrderTap} />
            <Footer />
        </>
    );
};

export default OrderListPage;