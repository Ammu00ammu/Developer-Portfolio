import React, { useState } from "react";
import Title from "../layouts/Title";
import Slider from "react-slick";
import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";
import testimonial3 from "../../assets/testimonial3.jpg";
import quotes from "../../assets/quotes.png";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { RiStarFill } from "react-icons/ri";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl text-gray-400 flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-4 lg:mt-11 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-xl text-gray-400 flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-4 lg:mt-11 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div className="p-4">
        <ul className="flex gap-3 justify-center mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer ${
          i === dotActive ? "bg-[#ff014f]" : "bg-gray-400"
        }`}
      />
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full  py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>

          {/* Testimonial 1 */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row justify-between gap-5 h-auto lg:h-[500px]">
              <div className="w-full lg:w-[40%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <img
                  className="w-full lg:w-72 h-72 rounded-lg object-cover object-top mx-auto"
                  src={testimonial1}
                  alt=""
                />
                <div className="text-center lg:text-left">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold">
                    Anne Hathway
                  </h3>
                  <p className="text-sm lg:text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] flex flex-col justify-between">
                <img
                  className="w-12 mx-auto lg:w-[25%]"
                  src={quotes}
                  alt="Quotes"
                />
                <div className="w-full py-8 lg:py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col gap-4 lg:gap-8">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                         Web Application Design.
                      </h3>
                      <p className="text-sm lg:text-base text-gray-400 mt-2">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-sm lg:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda ipsum animi nulla. Vitae hic itaque ad a, tempora
                    sit sequi maxime eveniet nemo dolore beatae enim veritatis
                    quas explicabo laudantium adipisci ducimus quasi illum?
                  </p>
                </div>
              </div>
            </div>
          </div>

                {/* Testimonial 2 */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row justify-between gap-5 h-auto lg:h-[500px] ">

              <div className="w-full lg:w-[40%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <img
                  className="w-full lg:w-72 h-72 rounded-lg object-cover object-top mx-auto"
                  src={testimonial2}
                  alt=""
                />
                <div className="text-center lg:text-left">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                   
                    Subett - roff
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold">Conner flores </h3>
                  <p className="text-sm lg:text-base tracking-wide text-gray-500">
                    Product Manager
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] flex flex-col justify-between ">
                <img className="w-12 mx-auto lg:w-[25%]" src={quotes} alt="" />

                <div className="w-full py-8 lg:py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col gap-4 lg:gap-8">

                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                        Travel Mobile App Design.
                      </h3>
                      <p className="text-sm lg:text-base text-gray-400 mt-2">
                        via Upwork - Mar 4, 2015- Aug 30, 2021
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-sm lg:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda ipsum animi nulla. Vitae hic itaque ad a, tempora
                    sit sequi maxime eveniet nemo dolore beatae enim veritatis
                    quas explicabo laudantium adipisci ducimus quasi illum?
                  </p>
                </div>
              </div>
            </div>
          </div>

                 {/* Testimonial 3 */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row justify-between gap-5 h-auto lg:h-[500px] ">

              <div className="w-full lg:w-[40%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <img
                  className="w-full lg:w-72 h-72 rounded-lg object-cover object-top mx-auto"
                  src={testimonial3}
                  alt=""
                />
                <div className="text-center lg:text-left">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                   
                    Hardy - Morela
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold">Eli hughes </h3>
                  <p className="text-sm lg:text-base tracking-wide text-gray-500">
                    Software Developer
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[60%] flex flex-col justify-between ">
                <img className="w-12 mx-auto lg:w-[25%]" src={quotes} alt="" />

                <div className="w-full py-8 lg:py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col gap-4 lg:gap-8">

                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                        Ecommerce App Design.
                      </h3>
                      <p className="text-sm lg:text-base text-gray-400 mt-2">
                        via Upwork - Mar 4, 2012- Aug 30, 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-sm lg:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda ipsum animi nulla. Vitae hic itaque ad a, tempora
                    sit sequi maxime eveniet nemo dolore beatae enim veritatis
                    quas explicabo laudantium adipisci ducimus quasi illum?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
