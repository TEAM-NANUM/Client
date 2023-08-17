import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../styles/Purchase/Purchase.css";
import SubHeader from "../../components/SubHeader"; 

const PurchasePage = ({ PROXY, userData, purchaseDetail, cartSelectedItemForPurchase }) => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(null);
    const [innerPurchaseDetail, setInnerPurchaseDetail] = useState(null);
    const [payErr, setPayErr] = useState(false);
    const [pointErr, setPointErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const doPay = () => {
        if (isLoading) {
            return;
        }
        setIsLoading(true);
        if (purchaseDetail.length ===  1) {
            const requestData = {
                product_id: purchaseDetail[0].productId,
                quantity: purchaseDetail[0].quantity,
                address: {
                    zip_code: userInfo.address.zip_code,
                    default_address: userInfo.address.default_address,
                    detail_address: userInfo.address.detail_address
                }
            };
    
            axios.post(`${PROXY}/api/orders`, requestData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            }).then((res)=>{
                if (res.status === 201) {
                    alert("상품 구매에 성공하였습니다!")
                    window.location.replace("/orderlist");
                    setIsLoading(false);
                }
            }).catch((err)=>{
                if (err.response && err.response.status === 402) {
                    setPayErr(true);
                    setIsLoading(false);
                } else {
                    console.log(err);
                    setIsLoading(false);
                }
            })
        } else {
            const requestData = {
                item_list: cartSelectedItemForPurchase,
                address: {
                    zip_code: userInfo.address.zip_code,
                    default_address: userInfo.address.default_address,
                    detail_address: userInfo.address.detail_address
                }
            };

            axios.post(`${PROXY}/api/cart/purchase`, requestData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            }).then((res)=>{
                if (res.status === 201) {
                    alert("상품 구매에 성공하였습니다!")
                    window.location.replace("/orderlist");
                    setIsLoading(false);
                }
            }).catch((err)=>{
                if (err.response && err.response.status === 402) {
                    setPayErr(true);
                    setIsLoading(false);
                } else {
                    console.log(err);
                    setIsLoading(false);
                }
            })
        }
    }
    
    useEffect(() => {
        axios.get(`${PROXY}/api/orders/user`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        })
            .then((res) => {
                setUserInfo(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [PROXY]);

    const makeTotalPrice = (useLeft) => {
        const price = purchaseDetail.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)

        if (useLeft) {
            return  (userInfo.point - price).toLocaleString();
        }
        return price.toLocaleString();
    }

    useEffect(() => {
        console.log(userData)
        console.log(purchaseDetail)
        if (userData === undefined || purchaseDetail === null) {
            window.location.replace("/");
        } else {
            if (userInfo &&
                userInfo.point - purchaseDetail.reduce((total, item) => {
                    return total + item.price * item.quantity
                }, 0) < 0
            ) {
                setPointErr(true);
            }            
            setInnerPurchaseDetail(purchaseDetail);
        }
    }, [PROXY, userInfo]);

    return <> {
            userInfo && innerPurchaseDetail &&
            <>
                <SubHeader page={'주문 작성'} path={purchaseDetail.length ===  1 ? `/productDetail/${purchaseDetail[0].productId}` : "/shoppingCart"}></SubHeader>
                <div className="divider" style={{marginTop:"53px", marginBottom: "10px"}}/>
                <div style={{display: "flex", marginBottom: "15px", alignItems: "center", justifyContent: "space-between"}}>
                    <span style={{fontSize: "15px", fontWeight:"600",padding: "0 16px"}} className="pay_span">
                        배송지
                    </span>
                    <div className="group_add_btn" style={{width: "50px", padding: "4px 6px", marginRight:"6px", height: "10px",color: "#1c18ffcd", border: "none"}} onClick={() => { navigate('/address?purchase=true') }}>배송지 변경</div>
                </div>  
                <div className='address_man_item_wrapper' style={{margin: "6px 0"}}>
                <div className='address_man_item_name' style={{fontSize:"12px", fontWeight: "500"}}>
                    <div>{`${userInfo.user_name}`}</div>
                </div>
                <div className='address_man_item_phone' style={{fontSize: "10px", color: "#5e5e5e"}}>{userInfo.phone_number}</div>
                <div className='address_man_item_address' style={{fontSize: "11px"}}>{`${userInfo.address.default_address} ${userInfo.address.detail_address}`}</div>
                </div>
                <div className="divider" style={{marginTop:"20px", marginBottom: "10px"}}/>

                <span style={{fontSize: "15px", fontWeight:"600",padding: "0 16px"}} className="pay_span">
                    상품 정보
                </span>
                {
                    innerPurchaseDetail.map((product, index) => (
                        <>
                            <div className="ShoppingCartList_content" style={{height: "110px", cursor:"default"}}>
                                <img className="cart_product_img" src={product.imgUrl} alt="상품이미지" style={{margin: "0 8px 0 16px", cursor:"default"}}></img>
                                <div className="Product_detail_info" style={{margin: "15px 0 auto 0 ", width: "170px",  cursor:"default"}}>
                                    <div className="Product_name" style={{marginLeft: "5px", fontWeight: "500", cursor:"default"}}>{product.name}</div>
                                    <div className="Product_name" style={{marginLeft: "5px", marginTop: "10px", cursor:"default",  fontSize: "11px"}}>수량{product.quantity}개</div>
                                </div> 
                                <div className="Product_price" style={{marginLeft: "auto", marginRight: "16px"}}>{product.price.toLocaleString()}원</div>
                            </div>
                            <div className="divider" style={{marginTop:"10px", marginBottom: "10px", height: innerPurchaseDetail.length - 1 === index? "" :"2px"}}/>
                        </>
                    ))
                }

                <div style={{padding: "4px 16px", marginBottom: "14px"}}>
                    <span style={{fontSize: "16px"}} className="pay_span">
                        결제 금액
                    </span>
                    <div style={{marginTop: "3px", height:"32px", display: "flex", padding: "4px 0 1px 0",justifyContent:"space-between"}}>
                        <p style={{fontWeight: "400", margin: "7px 0", fontSize: "14px", color:"#292929"}}>현재 잔고</p>
                        <p style={{fontWeight: "400", margin: "7px 0", fontSize: "14px", color:"#292929"}}>{userInfo.point.toLocaleString()} 원</p>
                    </div>
                    <div style={{display: "flex", height:"35px",padding: "1px 0 4px 0",justifyContent:"space-between", borderBottom: "0.5px solid lightgray"}}>
                        <p style={{fontWeight: "400", margin: "7px 0", fontSize: "14px", color: "#292929"}}>결제 후 잔액</p>
                        <p style={{fontWeight: "400", margin: "7px 0", fontSize: "14px", color: pointErr ? "#ff3535":"#292929"}}>{makeTotalPrice(true)} 원</p>
                    </div>
                    <div style={{marginTop: "12px",  height:"35px", display: "flex", padding: "4px 0",justifyContent:"space-between"}}>
                        <p style={{fontWeight: "600", margin: "7px 0", fontSize: "14px", color:"#292929"}}>최종 결제 금액</p>
                        <p style={{fontWeight: "600", margin: "7px 0", fontSize: "14px", color:"#292929"}}>{makeTotalPrice()} 원</p>
                    </div>
                </div>

                <div className="ShoppingCartSelect_container" style={{flexDirection: "column", height: payErr?"92px":""}}>
                    {payErr && <p style={{margin  : "5px 0 0 0", padding: 0, fontWeight: "400", fontSize: "14px", color:"rgb(247, 0, 0)"}}>결제에 실패하였습니다. 포인트가 부족합니다.</p>}
                    <div className="select_purchase" onClick={() => doPay()}>
                        <p>{makeTotalPrice()}원 결제하기</p>
                    </div>
                </div>
            </>
        }
    </>
};

export default PurchasePage;