import React from 'react';
import "../../styles/OrderList/OrderItem.css";

const OrderItem = ({ orderItem }) => {

    console.log(orderItem);
    return (
        <div className="ShoppingCartList_content" style={{height: "110px", cursor:"default"}}>
            <img className="cart_product_img" src={orderItem.img_url} alt="상품이미지" style={{margin: "0 8px 0 16px", cursor:"default"}}></img>
            <div className="Product_detail_info" style={{margin: "15px 0 auto 0 ", width: "170px",  cursor:"default"}}>
                <div className="Product_name" style={{marginLeft: "5px", fontWeight: "500", cursor:"default"}}>{orderItem.name}</div>
                <div className="Product_name" style={{marginLeft: "5px", marginTop: "10px", cursor:"default",  fontSize: "11px"}}>수량{orderItem.quantity}개</div>
            </div> 
            <div style={{marginLeft: "auto", display:"flex",flexDirection:"column"}}>
                
                <div className={
                        orderItem.delivery_status === "DELIVERED" ? "OrderItem_status_green" :
                            orderItem.delivery_status === "PAYMENT_COMPLETE" ? "OrderItem_status_black" :
                                "OrderItem_status_red"
                    }style={{fontSize:"14px",marginLeft:"auto", marginRight:"16px", marginBottom: "7px"}}>{orderItem.delivery_status === "DELIVERED" ? "배달 완료" :
                                orderItem.delivery_status === "PAYMENT_COMPLETE" ? "결제 완료" :
                                    orderItem.delivery_status === "IN_PROGRESS" ? "배송 중" :
                                        orderItem.delivery_status}</div>
                <div className="Product_price" style={{marginLeft: "auto", marginRight: "16px"}}>{orderItem.total_price.toLocaleString()}원</div>

            </div>
        </div>
        // <div className='OrderItem_container'>
        //     <div className='OrderItem_img'>
        //         <img src={orderItem.img_url} style={{objectFit: "cover", width:"85px", height:"85px", borderRadius:"6px"}} alt='상품 정보' /></div>
        //     <div className='OrderItem_content'>
        //         <div className='OrderItem_customer'>To. {orderItem.customer}</div>
        //         <div className='ItemInfo'>
        //             <p>상품정보</p>
        //         </div>
        //         <div className='OrderItem_name'>{orderItem.name}</div>
        //         <div className='OrderItem_bottom'>
        //             <div className='OrderItem_quantity_box'>
        //                 <div className='OrderItem_quantity'>수량 &nbsp;</div>
        //                 <div className='OrderItem_quantity_num'>{orderItem.quantity}</div>
        //             </div>
        //             <div className='OrderItem_price_box'>
        //                 <div className='OrderItem_price'>가격 &nbsp;</div>
        //                 <div className='OrderItem_price_num'>{orderItem.total_price}</div>
        //             </div>
        //             <div className={
        //                 orderItem.delivery_status === "DELIVERED" ? "OrderItem_status_green" :
        //                     orderItem.delivery_status === "PAYMENT_COMPLETE" ? "OrderItem_status_black" :
        //                         "OrderItem_status_red"
        //             }>
        //                 {orderItem.delivery_status === "DELIVERED" ? "배달 완료" :
        //                     orderItem.delivery_status === "PAYMENT_COMPLETE" ? "결제 완료" :
        //                         orderItem.delivery_status === "IN_PROGRESS" ? "배달중" :
        //                             orderItem.delivery_status}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default OrderItem;