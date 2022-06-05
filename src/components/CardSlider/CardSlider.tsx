import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import cn from "classnames";
import SliderImgOne from "../../assets/img/slider-img-1.png";
import SliderImgTwo from "../../assets/img/slider-img-2.png";
import SliderImgThree from "../../assets/img/slider-img-3.png";
import { ICardSlider } from "../../interfaces";

type CardSliderProps = {
  iconBg?: string;
  imgHeight?: string;
};

const CardSlider: React.FC<CardSliderProps> = ({
  iconBg = "bg-[#f5f3ec]",
  imgHeight = "md:h-[440px] h-[220px]",
}) => {
  const [slideToShow, setSlideToShow] = useState<number>(3);
  const [isCentered, setIsCentered] = useState<boolean>(true);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const sliderRef = useRef<any>(null);

  let settings = {
    className: "center",
    centerMode: isCentered,
    infinite: true,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    speed: 500,
    variableWidth: true,
    arrows: false,
    afterChange: (current: number) => setActiveSlide(current),
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSlideToShow(1);
      setIsCentered(false);
    } else {
      setSlideToShow(3);
      setIsCentered(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setSlideToShow(1);
        setIsCentered(false);
      } else {
        setSlideToShow(3);
        setIsCentered(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 1023) {
          setSlideToShow(1);
          setIsCentered(false);
        } else {
          setSlideToShow(3);
          setIsCentered(true);
        }
      });
    };
  }, []);

  const sliderData: ICardSlider[] = [
    {
      id: 1,
      sliderImg: SliderImgOne,
      sliderDesc:
        "Owning my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
      sliderCaption: "Client in Atlanta",
    },
    {
      id: 2,
      sliderImg: SliderImgTwo,
      sliderDesc:
        "Owning my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
      sliderCaption: "Client in Atlanta",
    },
    {
      id: 3,
      sliderImg: SliderImgThree,
      sliderDesc:
        "Owning my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
      sliderCaption: "Client in Atlanta",
    },
    {
      id: 4,
      sliderImg: SliderImgOne,
      sliderDesc:
        "Owning my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
      sliderCaption: "Client in Atlanta",
    },
    {
      id: 5,
      sliderImg: SliderImgTwo,
      sliderDesc:
        "Owning my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
      sliderCaption: "Client in Atlanta",
    },
    {
      id: 6,
      sliderImg: SliderImgThree,
      sliderDesc:
        "Owning my home allowed me to become an entrepreneur and laid down a path to financial freedom.",
      sliderCaption: "Client in Atlanta",
    },
  ];

  const renderCardSlides = sliderData.map(
    (item: ICardSlider, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div className="px-5 lg:w-[440px] md:w-[600px] w-[320px]">
            <div className={cn("w-full mb-12", imgHeight)}>
              <img
                src={item.sliderImg}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-cardShadow"
              />
            </div>
            <div className="mb-14">
              <p
                className={cn("md:text-2xl", {
                  hidden: activeSlide !== index,
                  block: activeSlide === index,
                })}
              >
                {item.sliderDesc}
              </p>
            </div>
            <div>
              <p
                className={cn("text-[#636260]", {
                  hidden: activeSlide !== index,
                  block: activeSlide === index,
                })}
              >
                {item.sliderCaption}
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:text-center mb-14">
          <h1 className="md:text-[60px] text-2xl leading-tight">
            Don't trust us,
            <br />
            trust our clients
          </h1>
        </div>
        <div className="w-full">
          <Slider
            {...settings}
            ref={sliderRef}
            className="md:h-[670px] h-[450px] w-full overflow-hidden"
          >
            {renderCardSlides}
          </Slider>
        </div>
        <div className="w-[440px] mx-auto">
          <div className="flex justify-end space-x-[7px] -mt-8 relative z-10 md:pr-0 pr-6">
            <button
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                iconBg
              )}
              onClick={goToPrevSlide}
            >
              <span>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.40831 4.99999L5.35831 2.04999C5.51352 1.89386 5.60063 1.68265 5.60063 1.46249C5.60063 1.24234 5.51352 1.03113 5.35831 0.874993C5.28084 0.796886 5.18867 0.73489 5.08712 0.692583C4.98557 0.650276 4.87665 0.628494 4.76664 0.628494C4.65663 0.628494 4.54771 0.650276 4.44616 0.692583C4.34461 0.73489 4.25244 0.796886 4.17497 0.874993L0.64164 4.40833C0.563533 4.48579 0.501538 4.57796 0.459231 4.67951C0.416924 4.78106 0.395142 4.88998 0.395142 4.99999C0.395142 5.11 0.416924 5.21892 0.459231 5.32047C0.501538 5.42202 0.563533 5.51419 0.64164 5.59166L4.17497 9.16666C4.25284 9.24389 4.34519 9.305 4.44672 9.34647C4.54825 9.38794 4.65697 9.40896 4.76664 9.40833C4.87631 9.40896 4.98503 9.38794 5.08656 9.34647C5.18809 9.305 5.28044 9.24389 5.35831 9.16666C5.51352 9.01052 5.60063 8.79931 5.60063 8.57916C5.60063 8.359 5.51352 8.14779 5.35831 7.99166L2.40831 4.99999Z"
                    fill="#636260"
                  />
                </svg>
              </span>
            </button>
            <button
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                iconBg
              )}
              onClick={goToNextSlide}
            >
              <span className="transform rotate-180">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.40831 4.99999L5.35831 2.04999C5.51352 1.89386 5.60063 1.68265 5.60063 1.46249C5.60063 1.24234 5.51352 1.03113 5.35831 0.874993C5.28084 0.796886 5.18867 0.73489 5.08712 0.692583C4.98557 0.650276 4.87665 0.628494 4.76664 0.628494C4.65663 0.628494 4.54771 0.650276 4.44616 0.692583C4.34461 0.73489 4.25244 0.796886 4.17497 0.874993L0.64164 4.40833C0.563533 4.48579 0.501538 4.57796 0.459231 4.67951C0.416924 4.78106 0.395142 4.88998 0.395142 4.99999C0.395142 5.11 0.416924 5.21892 0.459231 5.32047C0.501538 5.42202 0.563533 5.51419 0.64164 5.59166L4.17497 9.16666C4.25284 9.24389 4.34519 9.305 4.44672 9.34647C4.54825 9.38794 4.65697 9.40896 4.76664 9.40833C4.87631 9.40896 4.98503 9.38794 5.08656 9.34647C5.18809 9.305 5.28044 9.24389 5.35831 9.16666C5.51352 9.01052 5.60063 8.79931 5.60063 8.57916C5.60063 8.359 5.51352 8.14779 5.35831 7.99166L2.40831 4.99999Z"
                    fill="#636260"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSlider;
