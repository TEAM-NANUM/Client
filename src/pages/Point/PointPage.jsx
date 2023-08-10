import React, { useState } from 'react';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import PointForm from '../../components/Point/PointForm';
import PointMethod from '../../components/Point/PointMethod';
import PointResult from '../../components/Point/PointResult';
import "../../styles/Point/PointPage.css";
import PointBtn from '../../components/Point/PointBtn';

const PointPage = () => {

    const [point, setPoint] = useState(0)

    return (
        <>
            <SubHeader page={"포인트 충전"} />
            <div className='PointPage_container'>
                <PointForm point={point} setPoint={setPoint} />
                <PointMethod />
                <PointResult point={point} />
                <PointBtn point={point} />
            </div>
            <Footer />
        </>
    );
};

export default PointPage;