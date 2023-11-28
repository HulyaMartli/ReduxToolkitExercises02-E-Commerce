import React from "react";
import Slider from "react-slick";
import Img1 from "/img/1.jpg";
import Img2 from "/img/2.jpg";
import Img3 from "/img/3.jpg";
import Img4 from "/img/4.jpg";
import { PiTreeEvergreenThin } from "react-icons/pi";
import Button from "../Button";

const HeroSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
  };
  return (
    <div className="mx-auto rounded-lg border border-gray-200 bg-neutral-100 py-8">
      <Slider {...settings}>
        <div className="!flex items-center justify-around">
          <div className=" text-christmas-green flex flex-col items-center justify-center">
            <PiTreeEvergreenThin size={50} />
            <h1 className="font-ibmPlexSerif mb-6 text-5xl font-light italic">
              Christmas Collection
            </h1>
            <Button text="SHOP" />
          </div>
          <img
            src={Img1}
            width={600}
            alt="drawing 1"
            className="my-4 rounded shadow-lg"
          />
        </div>
        <div className="mt-24 !flex justify-center">
          <img
            src={Img2}
            width={600}
            alt="drawing 2"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className=" !flex items-center justify-center">
          <img
            src={Img3}
            width={500}
            alt="drawing 3"
            className="mt-16 rounded-lg  shadow-lg"
          />
        </div>
        <div className="!flex justify-center ">
          <img
            src={Img4}
            width={400}
            alt="drawing 4"
            className="mt-20 rounded-lg  shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
