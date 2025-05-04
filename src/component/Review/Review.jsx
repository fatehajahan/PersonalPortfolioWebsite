import React, { useState } from "react";
import { CiWavePulse1 } from "react-icons/ci";
import profile from "../../assets/rev1.jpg";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    name: "Client's Name",
    role: "Client",
    review:
      "No reviews yet..!!",
    image: profile,
  }
];

const Review = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#EEEEEE] py-[50px] md:px-0 px-[20px]">
      <div className="container">
        <div className="flex items-center gap-3">
          <p className="text-[20px] font-urbanist font-bold">
            SUCCESS STORIES FROM OUR CUSTOMERS
          </p>
          <CiWavePulse1 className="text-[40px]" />
        </div>

        {/* Auto-scroll container */}
        <div
          className="scroll-wrapper mt-8 overflow-hidden relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex gap-10 w-max ${
              isHovered ? "paused" : ""
            }`}
          >
            {/* scroll-container  */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="py-[30px] px-[30px] bg-white rounded-2xl md:w-[400px] w-[200px] flex-shrink-0 overflow-hidden"
              >
                <div className="flex items-center gap-3 cursor-pointer">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="md:w-[60px] w-[40px] h-[40px] md:h-[60px] rounded-full"
                  />
                  <div>
                    <p className="font-urbanist md:text-[18px] text-[12px] ">{testimonial.name}</p>
                    <p className="md:text-[13px] text-[10px]">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex py-[20px] text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-justify md:text-base text-[12px]">{testimonial.review}</p>
              </div>
            ))}

            {/* Duplicate items for infinite effect */}
            {/* {testimonials.map((testimonial, index) => (
              <div
                key={index + testimonials.length}
                className="py-[30px] px-[30px] bg-white rounded-2xl md:w-[400px] w-[200px] flex-shrink-0 overflow-hidden"
              >
                <div className="flex items-center gap-3 cursor-pointer">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="md:w-[60px] w-[40px] h-[40px] md:h-[60px] rounded-full"
                  />
                  <div>
                    <p className="font-urbanist md:text-[18px] text-[12px] ">{testimonial.name}</p>
                    <p className="md:text-[13px] text-[10px]">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex py-[20px] text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-justify md:text-base text-[12px]">{testimonial.review}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;