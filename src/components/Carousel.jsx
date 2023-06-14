import React, { useState } from "react";
import "./Style.css";
import { styled } from "styled-components";

const Progress = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 50px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    background-color: #2c2c2c;
    width: 0%;
    height: 100%;
    position: absolute;
    animation: ${(props) => (props.time ? props.time : "")}ms progress linear
      forwards;
  }
  /* } */

  @keyframes progress {
    100% {
      width: 100%;
    }
  }
`;

const Carousel = ({
  Sliders,
  autoSlide,
  interval,
  animationClass,
  textAnimationClass,
  backGround,
  position,
  headingColor,
  headingAnimation,
  bgColor,
  borderNeed,
  indicator,
  colorBg,
}) => {
  const [curr, setCurr] = React.useState(0);
  const prev = () => {
    setCurr((prev) => (prev === 0 ? Sliders.length - 1 : prev - 1));
  };
  const next = () => {
    setCurr((prev) => (prev === Sliders.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    if (!autoSlide) return;
    const slides = setInterval(next, interval);

    return () => clearInterval(slides);
  }, []);

  return (
    <>
      <div
        className={` flex h-full w-full   overflow-hidden relative
  `}
      >
        {Sliders.map((item, i) => (
          <div
            className={`min-w-full h-full relative 
           
            `}
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {/* //share button  */}

            <img
              src={item?.images}
              alt=""
              className={`w-full h-full object-cover  overflow-hidden ${
                colorBg ? "colorBackGround px-1 pb-1 pt-2" : ""
              }   pb-2 ${
                curr === i ? (animationClass ? animationClass : "") : ""
              } `}
            />

            <div
              className={`absolute bottom-0 left-0 right-0 p-3 text-white text-[1.3rem] z-2
              
      

              ${item?.url ? "bg-transparent" : "bg-[rgba(0,0,0,0.3)]"}

              ${
                item?.url
                  ? ""
                  : borderNeed
                  ? "border-t-[4px] border-red-600"
                  : ""
              }
          

              ${item?.url ? "" : position ? "bottom-5 mx-2 rounded-md" : ""}
               
              
              ${
                curr === i ? (textAnimationClass ? textAnimationClass : "") : ""
              }
              }`}
            >
              <span
                className={` py-[2px] 

                ${headingAnimation ? (curr === i ? headingAnimation : "") : ""}
              
                
               font-bold text-[1.1rem]`}
              >
                {item?.header}
              </span>
              <p className="pr-1 text-[1rem]">{item?.text} </p>
            </div>
          </div>
        ))}
        {/* button and ===> */}

        <div className="absolute left-0 right-0 top-[2px] flex flex-grow gap-[2px]">
          {Sliders.map((i, index) => (
            <>
              {index === curr ? (
                <Progress
                  className={`h-[4px] w-full border-[1px] rounded-xl bg-gray-500
              `}
                  time={interval}
                ></Progress>
              ) : (
                <div
                  className={`h-[4px] w-full border-[1px] rounded-xl  bg-gray-400
            `}
                ></div>
              )}
            </>
          ))}
        </div>
        <div className="absolute left-0 right-0   bottom-12 flex justify-between opacity-0 border top-10 ">
          <button onClick={prev}> Prev </button>
          <button onClick={next}> Next </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
