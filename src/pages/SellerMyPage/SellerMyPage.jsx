import axios from 'axios';
import React, { useEffect } from 'react';

const SellerMyPage = ({PROXY}) => {

    useEffect(() => {
        axios.get(`${PROXY}/api/seller`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              }
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    })

    return (
        <div>
            판매자 마이페이지
        </div>
    );
};

export default SellerMyPage;