import React from 'react';
import CustomAppBar from '../../components/CustomAppBar';
import CustomVerticalCarousel from '../../components/CustomVerticalCarousel';
import "./style.css";
import BookData from "../../data/book-detail.json";

const Detail = () => {
    return (
        <>
            <CustomAppBar />
            <div className='detail-grid-container'>
                <div className='detail-grid-item-1'>
                    <CustomVerticalCarousel 
                        thumbnails_object = {BookData.book_thumbnails}/>
                </div>
                <div className='detail-grid-item-2'>
                    <div className='detail-title'>{BookData.title}</div>
                    <div className="detail-price">
                        <span className='detail-discount-price-dollar'>$</span>
                        <span className='detail-discount-price'>{BookData.discounted_price}</span>
                        <del className='detail-cost-price'>$ {BookData.cost_price}</del>
                        <span className='detail-discount-percentage'>40% off</span>
                    </div>
                    <div className='detail-rating'>
                        <div className='detail-rating-tag'>
                            <span>4.6</span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <div className='detail-rating-count'>
                            <span>20 ratings</span> {" "}
                            <span>2 reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;