import React, { useState } from 'react';
import "../../styles/Category/CategoryList.css"
import CategoryItem from './CategoryItem';

const CategoryList = ({list, PROXY}) => {

    const [currentView, setCurrentView] = useState("");
    const [currentViewState, setCurrentViewState] = useState(true);

    const onViewToggle = (e) => {
        if(currentView !== e.currentTarget.id) {
            setCurrentView(e.currentTarget.id);
        } else {
            setCurrentViewState(idx=>!idx);
        }
    }

    console.log(list)

    return (
        <div className='categoryList_container'>
            <div className='categoryList_title'>
                <div className='categoryList_name_icon'>
                    <p id='categoryList_name'>{list.name}</p>
                    <img src={`./img/imgCategory/${list.name}.svg`} alt='icon' />
                </div>
                <div id='categoryList_viewBtn'><img id={list.name} src='./img/imgCategory/view.svg' alt='view' onClick={onViewToggle} /></div>
            </div>
            <div className='categoryList_content'>
                {currentViewState && (currentView === list.name) ? <CategoryItem PROXY={PROXY} category_id={list.id} /> : null}
            </div>
        </div>
    );
};

export default CategoryList;