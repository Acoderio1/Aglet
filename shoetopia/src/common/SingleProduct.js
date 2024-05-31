import React, { useEffect, useState } from "react";
import "./SingleProduct.scss";

import StarIcon from "@mui/icons-material/Star";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Button from "@mui/material/Button";

import CartButton from "./CartButton";
import ShoeCarousel from "./ShoeCarousel";

function SingleProduct({ config }) {

  const [product, setProduct] = useState(config.singleProduct);

  function addSize(value) {
    setProduct({...config.singleProduct, ...{size: value}})
    console.log(product);
  }
  
  
  return (
    <div className="productWrapper">
      <div className="productFirstfold">
        <img
          className="productImg"
          src={config.singleProduct.imageUrl}
          alt=""
        ></img>
        <div className="productDescription">
          <div className="productTitle">
            <div className="productType">{config.singleProduct.division}</div>
            <div className="productName">
              {config.singleProduct.productName}
            </div>
          </div>
          <div className="productBody">
            <div className="productPrice">
              ${config.singleProduct.listPrice}
            </div>
            <div className="productRating">
              {Array(config.singleProduct.rating)
                .fill("")
                .map((no) => (
                  <StarIcon key={no}></StarIcon>
                ))}
            </div>
            <div className="productSizes">
              <div className="sizeTitle">Sizes</div>
              <div className="sizeList">
                {config.singleProduct.sizes.map((item) => (
                  <div key={item} className={`sizeBox ${product.size === item ? 'active' : ''}`} onClick={() => addSize(item)}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="productButtons">
              <div className="cartButton">
                <CartButton config={{shoe:product, addCart: true}}></CartButton>
              </div>
              <Button className="buyNow" variant="contained">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        <div className="productDetails">
          <ul>
            <li>
              <CheckCircleRoundedIcon
                fontSize="small"
                className="tick"
              ></CheckCircleRoundedIcon>
              Regular fit
            </li>
            <li>
              <CheckCircleRoundedIcon
                fontSize="small"
                className="tick"
              ></CheckCircleRoundedIcon>
              Lace Closure
            </li>
            <li>
              <CheckCircleRoundedIcon
                fontSize="small"
                className="tick"
              ></CheckCircleRoundedIcon>
              Textile Lining
            </li>
            <li>
              <CheckCircleRoundedIcon
                fontSize="small"
                className="tick"
              ></CheckCircleRoundedIcon>
              Soft Feel
            </li>
            <li>
              <CheckCircleRoundedIcon
                fontSize="small"
                className="tick"
              ></CheckCircleRoundedIcon>
              Responsive Boost
            </li>
          </ul>
        </div>
      </div>
      <div className="productSecondfold">
        <div className="shoeDescription">
          <div className="descTitle">Description</div>
          <div className="descBody">{config.singleProduct.description}</div>
        </div>
      </div>
      <div className="productThirdfold">
        {config.featured && (
          <ShoeCarousel
            config={{ title: "Featured", shoes: config.featured }}
          ></ShoeCarousel>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;