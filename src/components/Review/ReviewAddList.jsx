import React, {useState} from 'react';
import "../../styles/Review/ReviewAddList.css";
import ReviewAddItem from './ReviewAddItem';
import axios from 'axios'

const ReviewAddList = ({ index, item, writtenReview }) => {
    const [star, setStar] = useState(0);
    const [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (e) => {
        setInputValue(e.currentTarget.value);
    }

    const handlePost = ()=>{
        if (star !== 0 && inputValue!=="") {

            const requestData = {
                order_id: item.id,
                rating: star,
                comment: inputValue
            };

            axios.post(`https://api.hanche.store/api/reviews`, requestData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            }).then((res)=>{window.location.reload()}).catch((e)=>{console.log(e)})
        }
    }

    return (
        <>
        <div className="main_review">
            <span className="main_review_user">{item.name}</span>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "360px"}}>
                    <div style={{width: "260px", display:"flex", flexDirection:"column", alignItems:"start", marginBottom: "auto"}}>
                        <div>
                            <img style={{marginBottom: "4px", marginTop: "auto", objectFit: "cover", width: "20px"}}src={`./img/imgs/star${star >= 1?"On":"Disable"}.svg`} onClick={()=>{setStar(1)}} alt="평점"/>
                            <img style={{marginBottom: "4px", marginTop: "auto", objectFit: "cover", width: "20px"}}src={`./img/imgs/star${star >= 2?"On":"Disable"}.svg`} onClick={()=>{setStar(2)}}alt="평점"/>
                            <img style={{marginBottom: "4px", marginTop: "auto", objectFit: "cover", width: "20px"}}src={`./img/imgs/star${star >= 3?"On":"Disable"}.svg`} onClick={()=>{setStar(3)}}alt="평점"/>
                            <img style={{marginBottom: "4px", marginTop: "auto", objectFit: "cover", width: "20px"}}src={`./img/imgs/star${star >= 4?"On":"Disable"}.svg`} onClick={()=>{setStar(4)}}alt="평점"/>
                            <img style={{marginBottom: "4px", marginTop: "auto", objectFit: "cover", width: "20px"}}src={`./img/imgs/star${star >= 5?"On":"Disable"}.svg`} onClick={()=>{setStar(5)}}alt="평점"/>
                        </div>
                        
                        <div className="main_review_comment" style={{wordBreak:"break-all", wordWrap:"breakWord"}}>

                        <textarea
                            style={{
                                padding:"10px",
                                resize:"none",
                                borderRadius:"6px",
                                marginTop: "15px",
                                border: "1px solid #9e9e9e",
                                width: "220px",
                                height: "70px"
                            }}
                            value={inputValue}
                            onChange={handleInputChange}
                            maxLength={200}
                        ></textarea>
                        </div>
                    </div>
                    <div>
                        <img style={{objectFit: "cover", borderRadius: "4px ",width: "80px", height: "80px", marginBottom: "auto"}}src={item.img_url} alt="평점"/>
                    </div>


                </div>
            </div>
            <div className="ShoppingCartSelect_container" onClick={()=>{handlePost()}} style={{flexDirection: "column", position: "relative", border:0, margin: "0 0 20px 0", padding: 0}}>
                    <div className={(star !== 0 && inputValue!=="") ? "select_purchase" : "purchase_disable"}  onClick={() => {}}>
                        <p>리뷰 작성하기</p>
                    </div>
                </div>  
            {index !== writtenReview.length-1 && <div style={{margin:"0 0 10px 0", height: "0.1px", backgroundColor:"#e7e7e7"}}></div>}
        </>
    );
};

export default ReviewAddList;