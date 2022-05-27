import React from "react";
import "./style.css";

type ICustomBookPanel = {
  title: String;
  author: String;
  publisher: String;
  cost_price: String;
  discounted_price: String;
};

const CustomBookPanel = (props: ICustomBookPanel) => {
  const { title, author, publisher, cost_price, discounted_price } = props;

  return (
    <div className="panel-root">
      <div className="panel-image-display">
        <img
          src="https://m.media-amazon.com/images/I/91jwRwzDM0L._AC_UY327_FMwebp_QL65_.jpg"
          alt = "book_thumbnail"
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
      </div>
    </div>
  );
};

export default CustomBookPanel;
