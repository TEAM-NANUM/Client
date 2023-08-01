import React, { useEffect } from 'react';
import "../../styles/Account/Code.css";

const Code = ({code, setCode}) => {

    const onCode = (e) => {
        setCode(e.currentTarget.value);
    }
    
    return (
        <div className='code_container'>
            <input type='text' value={code} placeholder='코드 입력' onChange={onCode} />
        </div>
    );
};

export default Code;