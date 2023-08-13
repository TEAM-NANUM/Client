import React from 'react';
import "../../styles/Point/PointBtn.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PointBtn = ({PROXY, point, paymentMethod}) => {

    const navigate = useNavigate();

    const chargeEcoPoint = () => {
        // try {
        //   const token = localStorage.getItem("access_token");
        //   const response = await axios.post(
        //     `${PROXY}/api/user/charge`,
        //     {
        //       "point": point
        //     },
        //     {
        //         headers: {
        //             'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        //         },
        //     }
        //   );
        //   if (response.status === 200) {
        //     console.log(response.body);
        //   } else {
        //     console.error("결제 실패 : ", response.status);
        //   }
        // } catch (error) {
        //   console.error("결제 실패 : 서버 통신 오류", error);
        // }
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
          alert("결제 수단을 선택 해주세요.")
        }
    }

    return (
        <div className='PointBtn_container' onClick={handlePayment}>
            충전하기
        </div>
    );
};

export default PointBtn;