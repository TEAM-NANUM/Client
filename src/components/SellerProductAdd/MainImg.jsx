import axios from 'axios';
import React, { useState } from 'react';

const MainImg = ({PROXY, productForm, setProductForm, mainImg, setMainImg} ) => {

    const [fileInfo, setfileInfo] = useState([]);

    const onSetMainImg = (e) => {
        let reader = new FileReader();

        reader.onload = function(e) {
            setMainImg(e.currentTarget.result)
        };

        reader.readAsDataURL(e.target.files[0]);


        let fileInfo = e.target.files[0].name.split(".")

        axios.post(`${PROXY}/api/presigned`, {
            "image_list" : [
                {
                    "file_name" : fileInfo[0],
                    "file_type" : `image/${fileInfo[1]}`
                }
            ]
        }, {
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then((res) => {
            axios.put(res.data.URLlist[0].presigned_url, e.target.files[0], {
                headers: {
                    'Content-Type': e.target.files[0].type, // 파일의 MIME 타입 설정
                  },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))


            setProductForm({...productForm, img_url : res.data.URLlist[0].image_url})
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
    }

    const onImgChange = () => {
        if (mainImg) {
            if (window.confirm("등록된 사진이 삭제됩니다.")) {
                setMainImg("");
            }
        } else {
            alert("등록된 사진이 없습니다.")
        }
    }

    return (
        <div className='MainImg_container'>
            <div className='MainImg_text'>상품 대표 사진 1장</div>
            {!mainImg && <input type='file' accept='image/*' onChange={onSetMainImg} />}
            {mainImg && <img  src={mainImg} alt='상품 메인 사진'/>}
            <div className='img_change_btn' onClick={onImgChange}>대표사진 수정하기</div>
        </div>
    );
};

export default MainImg;