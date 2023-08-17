import React, {useState} from 'react';
import "../../styles/Point/PointBtn.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PointBtn = ({PROXY, point, paymentMethod, payErr, setPayErr}) => {
    const navigate = useNavigate();

    const chargeEcoPoint = () => {
        axios.put(`${PROXY}/api/user/charge`, {
            "point" : Number(point)
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            }})
        .then((res) => alert(`${point} 포인트가 충전 됐습니다.`))
        .then((res) => window.location.replace("/mypage"))
        .catch((err) => console.log(err))
      };
    
      const handlePayment = () => {
        if (!window.IMP) return;
        /* 1. 가맹점 식별하기 */
        const { IMP } = window;
        IMP.init("imp80111716"); // 가맹점 식별코드 반드시 env처리
    
        /* 2. 결제 데이터 정의하기 */
        const data = {
          pg: paymentMethod,
          pay_method: "card", // 결제수단
          merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
          amount: point, // 결제금액
          name: `한채 포인트 충전 ${point}원`, // 주문명
          buyer_name: "", // 구매자 이름
          buyer_tel: "", // 구매자 전화번호
          buyer_email: "", // 구매자 이메일
          buyer_addr: "", // 구매자 주소
          buyer_postcode: "", // 구매자 우편번호
        };
    
        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
      };
      
    
      /* 3. 콜백 함수 정의하기 */
      function callback(response) {
        const { success, error_msg } = response;
        if (success) {
          chargeEcoPoint();
        } else {
          setPayErr(true)
        }
    }

    return (
      <>
        <div className="ShoppingCartSelect_container" style={{flexDirection: "column", height: payErr?"92px":""}}>
        {payErr && <p style={{margin  : "5px 0 0 0", padding: 0, fontWeight: "400", fontSize: "14px", color:"rgb(247, 0, 0)"}}>결제에 실패하였습니다.</p>}
            <div className={point === 0 ? "purchase_disable" : "select_purchase"}  onClick={() => handlePayment()}>
                <> 
                    {
                        point === 0 ? "0원 결제하기" : 
                        <>
                            <p>{point.toLocaleString()}원 결제하기</p>
                        </>
                    }
                </>
            </div>
        </div>
      </>
    );
};

export default PointBtn;