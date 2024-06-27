import React, { useRef } from "react";

import "./ShoeCarousel.scss";
import { useNavigate } from "react-router-dom";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Line from "./Line";

function ShoeCarousel({ config }) {
  const scrollable = useRef(null);
  const navigate = useNavigate();

  const scrollIt = (toRight) => {
    const scrollLength = 1000;
    scrollable.current.scrollBy({
      left: scrollLength * (toRight ? 1 : -1),
      behavior: "smooth",
    });
  };

  function navigateTo(productId) {
    navigate(`/product/${productId}`);
  }

  return (
    <div className="shoeCarouselWrapper">
      <div className="title">{config?.title}</div>
      <Line></Line>
      <ChevronLeftRoundedIcon
        onClick={() => scrollIt(false)}
        className="leftslide"
        fontSize="large"
      ></ChevronLeftRoundedIcon>
      <div className="shoeRows" ref={scrollable}>
        {config.shoes?.map((shoe) => (
          <div
            
            key={shoe._id}
            className="productWrapper"
          >
            <div className="imgCart">
              <img
                onClick={() => navigateTo(shoe._id)}
                loading="lazy"
                className="shoeimg"
                src={shoe.imageUrl}
                alt={shoe.producName}
              ></img>
            </div>
            <div className="shoedetails">
              <div className="desc">
                <div className="productname">{shoe.productName}</div>
                <div className="division">{shoe.division}</div>
              </div>
              <div className="price">${shoe.listPrice}</div>
            </div>
          </div>
        ))}
      </div>
      <ChevronRightRoundedIcon
        onClick={() => scrollIt(true)}
        className="rightslide"
        fontSize="large"
      ></ChevronRightRoundedIcon>
    </div>
  );
}

export default ShoeCarousel;