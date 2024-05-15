import React, { useEffect, useState, useRef } from "react";

import "./ShoeCarousel.scss";

import axios from "../axios";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

function ShoeCarousel({ title, fetchUrl }) {
  const [shoes, setShoes] = useState();
  const scrollable = useRef(null);

  const scrollIt = (toRight) => {
    const scrollLength = 1000; //Calculate your scroll length however you want.
    scrollable.current.scrollBy({left: scrollLength * (toRight ? 1 : -1), behavior: "smooth"});
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setShoes(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(shoes);
  return (
    <div className="shoeCarouselWrapper">
      <div className="title">{title}</div>
      <ChevronLeftRoundedIcon onClick={()=>scrollIt(false)} className="leftslide" fontSize="large"></ChevronLeftRoundedIcon>
      <div className="shoeRows" ref={scrollable}>
        {shoes?.map((shoe) => (
          <div key={shoe._id} className="productWrapper">
            <div className="imgCart">
              <img
                className="shoeimg"
                src={shoe.imageUrl}
                alt={shoe.producName}
              ></img>
              <AddRoundedIcon
                className="addCart"
                fontSize="medium"
              ></AddRoundedIcon>
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
      <ChevronRightRoundedIcon onClick={()=>scrollIt(true)} className="rightslide" fontSize="large"></ChevronRightRoundedIcon>
    </div>
  );
}

export default ShoeCarousel;
