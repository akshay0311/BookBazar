import React from "react";
import "./style.css";

type ICustomBookPanel = {
  title: String;
  author: String;
  publisher: String;
  cost_price: String;
  discounted_price: String;
  clickCard : () => void;
};

const CustomBookPanel = (props: ICustomBookPanel) => {
  const { title, author, publisher, cost_price, discounted_price, clickCard } = props;

  return (
    <div className="panel-root" onClick={clickCard}>
      <div className="panel-image-display">
        <img
          src="https://m.media-amazon.com/images/I/91jwRwzDM0L._AC_UY327_FMwebp_QL65_.jpg"
          alt="book_thumbnail"
        />
      </div>
      <div className="panel-data">
        <div className="panel-title">
          <span>{title}</span>
        </div>
        <div className="panel-meta-data">
          <span>by {author}</span> <span>|</span>{" "}
          <span>Sold by: {publisher}</span>
        </div>
        <div className="panel-rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div className="panel-price">
            <span className="panel-price-dollar">$</span>
            <span className="panel-price-price">{cost_price}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomBookPanel;
