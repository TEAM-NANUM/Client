import React, { useState } from 'react';
import SellerProductAddForm from '../../pages/SellerProductAdd/SellerProductAddForm';

const Contents = ({productForm, setProductForm, PROXY, htmlContent, setHtmlContent, quillRef}) => {

    const [answer, setAnswer] = useState();

    const onDescription = () => {
        if(answer) {
            setProductForm({...productForm, "description" : answer.join("")})
            console.log(answer.join(""))
            alert("상품 설명이 등록됐습니다.")
        }
    }

    return (
        <div className='Contents_container'>
            <div className='Contents_header'>제품 설명</div>
            <div className='Contents_text_box'>
                <SellerProductAddForm setAnswer={setAnswer} PROXY={PROXY} htmlContent={htmlContent} setHtmlContent={setHtmlContent} quillRef={quillRef} />
            </div>
            <div className='contents_add_btn' onClick={onDescription}><p>설명 등록하기</p></div>
        </div>
    );
};

export default Contents;