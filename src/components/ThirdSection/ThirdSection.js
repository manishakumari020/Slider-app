import React, { useRef, useEffect } from "react";
import "./style.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ThirdSection() {
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const slideDuration = 3000; // Adjust the slide duration in milliseconds
  const slides = [
    {
      id: 1,
      title: "Loreum Ipsum 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem 1."
    },
    {
      id: 2,
      title: "Loreum Ipsum 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem 2."
    },
    {
      id: 3,
      title: "Loreum Ipsum 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem 3."
    }
    // Add more slides as needed
  ];

  useEffect(() => {
    let timer;
    const container = sliderRef.current;

    const scrollNext = () => {
      container.scrollLeft += scrollAmount;
    };

    const autoSlide = () => {
      timer = setInterval(() => {
        scrollNext();
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }, slideDuration);
    };

    autoSlide();

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Third Section</h1>
      <button
        className="nav-btn left"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount;
        }}
      >
        <ChevronLeftIcon />
      </button>
      <div className="slider-container" ref={sliderRef}>
        {slides.map((slide) => {
          return (
            <div className="slide" key={slide?.id}>
              <h1>{slide?.title}</h1>
              <p>{slide?.description}</p>
              <button className="know-more-btn">Know More</button>
            </div>
          );
        })}
      </div>
      <button
        className="nav-btn right"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount;
        }}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
