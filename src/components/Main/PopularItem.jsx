import react from "react";
import "../../styles/Main/PopularItem.css"

const PopularItem = () => {
    return (
        <div className="PopularItem_container">
            <div className="PopularItem_header">
                <div className="PopularItem_title">인기상품</div>
                <img src="./img/imgMain/item_icon.png" alt="상품아이콘"></img>
                <div className="PopularItem_more">
                    <img src="./img/imgMain/more.png" alt="더보기"></img>
                </div>
            </div>
            <div className="PopularItem_list">
                <div className="PopularItem">
                    <img src='./img/imgMain/potato.png' alt='감자'></img>
                </div>
                <div className="PopularItem">
                    <img src='./img/imgMain/potato.png' alt='감자'></img>
                </div>
                <div className="PopularItem">
                    <img src='./img/imgMain/potato.png' alt='감자'></img>
                </div>
            </div>
        </div>
    )
}

export default PopularItem;