import React, { useState } from "react";
import "./style.css";

type ICustomVerticalCarousel = {
  thumbnails_object: { id: number; image: string }[];
};

const CustomVerticalCarousel = (props: ICustomVerticalCarousel) => {
  const { thumbnails_object } = props;

  const [thumbnails, setThumbnails] = useState(thumbnails_object);
  const [mainImage, setMainImage] = useState<number>(1);

  const handleHover = (id: number) => {
    setMainImage(id);
  };

  return (
    <div className="vertical-carousel-root">
      <div className="vertical-carousel-thumbnails">
        {thumbnails.map((thumbnail: any, index: number) => (
          <div
            className={
              "vertical-carousel-thumbnail" +
              (mainImage === index + 1 ? "-active" : "-inactive")
            }
            onMouseEnter={() => handleHover(thumbnail.id)}
          >
            <img
              src={thumbnail.image}
              className="vertical-carousel-thumbnail-image"
            />
            <br />
            <br />
          </div>
        ))}
      </div>
      <div className="vertical-carousel-main-image">
        <h1>{mainImage}</h1>
      </div>
    </div>
  );
};

export default CustomVerticalCarousel;
