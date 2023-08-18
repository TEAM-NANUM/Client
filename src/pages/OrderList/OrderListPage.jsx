import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styles/OrderList/OrderListPage.css"
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import OrderList from '../../components/OrderList/OrderList';
import OrderTap from '../../components/OrderList/OrderTap';

const OrderListPage = ({ PROXY }) => {

  const [orderList, setOrderList] = useState()
  const [completeOrderList, setCompleteOrderList] = useState()
  const [tab, setTab] = useState("progress");
  
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
      <div className='ShoppingCartPage_top' style={{cursor: "pointer"}}>
            <div style={{height: "43px", width: "50%", display: "flex", borderRight: "0.1px solid lightgray",flexDirection:"row",alignItems: "center", backgroundColor: tab==="progress"?"":"#f6f6f6"}} onClick={()=>{setTab("progress")}}>
                <p style={{margin: "auto", padding: 0}}>진행중인 주문</p>
            </div>
            <div style={{height: "43px", width: "50%", display: "flex", borderLeft: "0.1px solid lightgray",flexDirection:"row",alignItems: "center",backgroundColor: tab==="complete"?"":"#f6f6f6"}} onClick={()=>{setTab("complete")}}>
                <p style={{margin: "auto", padding: 0}}>완료된 주문</p>
            </div>
        </div>
      <div className='ReviewPage_container'>
          <OrderList orderList={tab==="progress" ?orderList :completeOrderList}  />
      </div>
    </>
  );
};

export default OrderListPage;