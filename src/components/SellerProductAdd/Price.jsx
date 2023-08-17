import React from 'react';

const Price = ({productForm, setProductForm,  price, setPrice}) => {

    const onPrice = (e) => {
        setPrice(e.currentTarget.value)
        setProductForm({...productForm, price : e.currentTarget.value})
    }

    return (
        <div className='Price_container'>
            <div className='Price_header'>제품 가격</div>
            <div className='Price_text'>
                <input value={price} type='text' placeholder='제품의 가격을 적어주세요.' onChange={onPrice}/>
                <div>원</div>
            </div>
        </div>
    );
};

export default Price;