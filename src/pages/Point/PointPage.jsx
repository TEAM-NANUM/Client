import React, { useState,useEffect } from 'react';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import PointForm from '../../components/Point/PointForm';
import PointMethod from '../../components/Point/PointMethod';
import PointResult from '../../components/Point/PointResult';
import "../../styles/Point/PointPage.css";
import axios from "axios";
import PointBtn from '../../components/Point/PointBtn';

const PointPage = ({PROXY}) => {
    const [payErr, setPayErr] = useState(false);

    const [point, setPoint] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState("kakaopay");
    const [userData, setUserData] = useState();

    useEffect(()=>{
        setPayErr(false)
    },[point, paymentMethod])

    useEffect(() => {
        axios
        .get(`${PROXY}/api/user`, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
        .then((res) => {setUserData(res.data)})
        .catch((err) => {console.log(err)});
    }, []);

    return (
        <>
            <SubHeader page={"포인트 충전"} />
            <div className='PointPage_container' style={{margin: "70px 0 50px 0"}}>
                {userData && <PointForm point={point} setPoint={setPoint} userData={userData}/>}
            </div>
            <div className='divider'/>
            <div className='PointPage_container' style={{margin: "25px 0 50px 0"}}>
                {userData && <PointMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} point={point} userData={userData}/>}
            </div>
            <PointBtn PROXY={PROXY} point={point} paymentMethod={paymentMethod} payErr={payErr} setPayErr={setPayErr}/>
        </>
    );
};

export default PointPage;