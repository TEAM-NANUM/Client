import React from 'react';

const Unit = ({productForm, setProductForm, unit, setUnit}) => {

    const onUnit = (e) => {
        setUnit(e.currentTarget.value)
        setProductForm({...productForm, unit : e.currentTarget.value})
    }

    return (
        <div className='Unit_container'>
            <div className='Unit_header'>제품 단위</div>
            <div className='Unit_text'>
                <input value={unit} type='text' placeholder='제품의 단위를 적어주세요.' onChange={onUnit}/>
                <div>kg</div>
            </div>
        </div>
    );
};

export default Unit;