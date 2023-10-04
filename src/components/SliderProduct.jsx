import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Product } from "./Product";
export const SliderProduct = (props) => {
  const name = props.name;
  const listProduct = props.listProduct;

  const slider = useRef(null);

  const settings = {
    centerPadding: '10px',
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const renderProduct = () => {
    return listProduct
    .map((item) => {
      return (
        <div className="px-2">
          <Product item={item} key={item.id} />
        </div>
      );
    });
  };

  return (
    <div className="type ">
      <div className="py-6">
        <div className="relative mx-auto max-w-8xl lg:px-8 px-6">
          <div className="flex justify-between">
            <h1 className="text-3xl lg:text-4xl py-3">{name}</h1>
            <p className="text-center pt-3">
            <Link to={`/products`}>
              Xem thêm
              <ChevronRightIcon className="inline h-4 w-4 m1-2" />
              </Link></p>
          </div>
          <Slider className="mt-2" {...settings} ref={slider}>
            {renderProduct()}
          </Slider>
        </div>
      </div>
    </div>
  );
}