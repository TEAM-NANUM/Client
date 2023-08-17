import React from 'react';

const Category = ({productForm, setProductForm,  category, setCategory}) => {

    const OPTIONS = [
        { value: 1, name: "카테고리를 선택하세요" },
        { value: 2, name: "사과/배/감" },
        { value: 3, name: "귤/한라봉" },
        { value: 4, name: "오렌지/자몽/레몬" },
        { value: 5, name: "토마토" },
        { value: 6, name: "포도" },
        { value: 7, name: "딸기/블루베리" },
        { value: 8, name: "멜론/수박/참외" },
        { value: 9, name: "복숭아/자두" },
        { value: 10, name: "열대과일" },
        { value: 11, name: "건조과일" },
        { value: 12, name: "기타과일" },
        { value: 13, name: "선물세트" },
        { value: 15, name: "밤/견과류" },
        { value: 16, name: "쌈채소/오이/고추" },
        { value: 17, name: "무/열무/얼갈이" },
        { value: 18, name: "쌀/잡곡" },
        { value: 19, name: "뿌리채소/인삼" },
        { value: 20, name: "감자/고구마/옥수수" },
        { value: 21, name: "마늘/양파/파" },
        { value: 22, name: "나물/버섯/두부" },
        { value: 23, name: "기타농산물" },
        { value: 24, name: "선물세트" },
        { value: 26, name: "소고기" },
        { value: 27, name: "돼지고기" },
        { value: 28, name: "유제품" },
        { value: 29, name: "닭/오리/양" },
        { value: 30, name: "선물세트" },
        { value: 32, name: "배추김치" },
        { value: 33, name: "무김치" },
        { value: 34, name: "열무김치" },
        { value: 35, name: "갓김치" },
        { value: 36, name: "파/대파김치" },
        { value: 37, name: "물김치/동치미" },
        { value: 38, name: "별미김치" },
    ];

    const onCategory = (e) => {
        setCategory(e.currentTarget.value)
        setProductForm({...productForm, subcategory_id : e.currentTarget.value})
    }

    return (
        <div className='Category_container'>
            <div className='Category_header'>제품 카테고리</div>
            <select onChange={onCategory}>
                {OPTIONS.map((option) => (
                    <option
                        value={option.value}
                    >
                        {option.name}
                    </option>
                ))}
		    </select>
        </div>
    );
};

export default Category;