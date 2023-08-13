import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../../styles/Group/GroupPage.css";
import SubHeader from '../../components/SubHeader';
import MyInfo from '../../components/Group/MyInfo';
import GroupList from "../../components/Group/GroupList";
import Footer from "../../components/Footer/Footer";

const GroupPage = ({ PROXY }) => {
    const navigate = useNavigate();

    const [group, setGroup] = useState({
        "host": [
            {
                "username": "",
                "point": 1
            }
        ],
        "member": [
            {
                "default_address": "",
                "invite_code": "",
                "nickname": ""
            }
        ]
    })

    useEffect(() => {
        axios.get(`${PROXY}/api/groups`)
            .then((res) => setGroup(res.data))
            .catch((err) => console.log(err))
    }, []);

    return (
        <div className='GroupPage_container'>
            <SubHeader page="그룹관리" />
            <MyInfo group={group}></MyInfo>
            <GroupList group={group}></GroupList>
            <div
                className='add_group'
                onClick={() => { navigate('/groupAdd') }}
            >+ 그룹원 추가하기</div>
            <div className='group_page_coment'>그룹원들은 대표 계정의 머니를 공유합니다.</div>
            <div className='group_page_coment'>초대 코드 및 링크가 노출되지 않도록 주의해주세요.</div>
            <Footer></Footer>
        </div>
    );
};

export default GroupPage;