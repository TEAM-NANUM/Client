import react from "react";
import "../../styles/Main/NewItem.css"

const NewItem = () => {
    return (
        <div className="NewItem_container">
            <div className="NewItem_header">
                <div className="NewItem_title">최근 등록된 상품</div>
                <div className="NewItem_title_new">New</div>
                <img src="./img/imgMain/item_icon.png" alt="상품아이콘"></img>
                <div className="NewItem_more">
                    <img src="./img/imgMain/more.png" alt="더보기"></img>
                </div>
            </div>
            <div className="NewItem_list">
                <div className="NewItem">
                    <img src='./img/imgMain/potato.png' alt='감자'></img>
                </div>
                <div className="NewItem">
                    <img src='./img/imgMain/potato.png' alt='감자'></img>
                </div>
                <div className="NewItem">
                    <img src='./img/imgMain/potato.png' alt='감자'></img>
                </div>
            </div>
        </div>
    )
}

export default NewItem;