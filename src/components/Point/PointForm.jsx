import React, {useRef} from 'react';
import "../../styles/Point/PointForm.css";

const PointForm = ({point, setPoint, userData}) => {

    const pointInput = useRef();

    const handleInputChange = (event) => {
        setPoint(parseInt(event.currentTarget.value) || 0);
    };

    return (
        <div className='PointForm_container'>

            <div className="pay_header">
                <div className="pay_header_txt">
                    <span className="pay_span">
                        충전 금액을 입력해주세요
                    </span>
                    <p style={{fontWeight: "300", margin: "7px 0", fontSize: "14px", color:"#575757"}}>보유중인 머니 {userData.point.toLocaleString()}원</p>
                </div>
            </div>
            <input type="tel" className="form_point" 
                ref={pointInput}
                placeholder='1만 원부터 충전 가능합니다'
                value={point}
                onChange={handleInputChange}
            ></input>
            <div onClick={()=>pointInput.current.focus()} style={{display: "flex", flexDirection:"column", alignItems: "flex-end", marign: 0, padding: "0 10px 0 0",  position: "relative", top: "-31px", left:"0px", fontWeight: 500}}>
                원
            </div>
            <div className='PointForm_add_box'>
                <div className='PointForm_add' onClick={() => setPoint(idx=>parseInt(idx) + 10000)}><p style={{margin: 0}}>+ 1만원</p></div>
                <div className='PointForm_add' onClick={() => setPoint(idx=>parseInt(idx) + 30000)}><p style={{margin: 0}}>+ 3만원</p></div>
                <div className='PointForm_add' onClick={() => setPoint(idx=>parseInt(idx) + 50000)}><p style={{margin: 0}}>+ 5만원</p></div>
                <div className='PointForm_add' onClick={() => setPoint(idx=>parseInt(idx) + 100000)}><p style={{margin: 0}}>+ 10만원</p></div>
            </div>
        </div>
    );
};

export default PointForm;