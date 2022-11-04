import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import {
  cloud,
  board,
  emailTop,
  phone,
  amparoLogo,
  dropdown,
  amparoBoard,
  truck,
  abstract01,
  abstract02,
  abstract03,
  abstract04,
  arrowLeft,
  arrowRight,
} from "../../assets/images.js";
import file from "../../assets/videos/file.mp4";
import file1 from "../../assets/videos/file1.mp4";
import file2 from "../../assets/videos/file2.mp4";
import file3 from "../../assets/videos/file3.mp4";

const handleDragStart = (e) => e.preventDefault();
var videoX;

const items = [
  <img
    src={abstract01}
    width="100"
    height="100"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={abstract02}
    width="100"
    height="100"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={abstract03}
    width="100"
    height="100"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={abstract04}
    width="100"
    height="100"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={abstract02}
    width="100"
    height="100"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div
      className="thumb"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      {item}
    </div>
  ));
};

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
};
const responsive2 = {
  0: { items: 5 },
};

const Carousel = () => {
  const [mainIndex, setMainIndex] = useState(4);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );
  videoX = mainIndex;
  console.log("mainindex", mainIndex);
  // console.log("items", items2);

  const items2 = [
    <video
      className={mainIndex !== 4 ? "video-inactive" : "video-active"}
      src={file}
      width="100%"
      height="500"
      controls={mainIndex !== 4 ? false : true}
    ></video>,
    <video
      className={mainIndex !== 0 ? "video-inactive" : "video-active"}
      src={file1}
      width="100%"
      height="500"
      controls={mainIndex !== 0 ? false : true}
    ></video>,
    <video
      className={mainIndex !== 1 ? "video-inactive" : "video-active"}
      src={file2}
      width="100%"
      height="500"
      controls={mainIndex !== 1 ? false : true}
    ></video>,
    <video
      className={mainIndex !== 2 ? "video-inactive" : "video-active"}
      src={file3}
      width="100%"
      height="500"
      controls={mainIndex !== 2 ? false : true}
    ></video>,
    <video
      className={mainIndex !== 3 ? "video-inactive" : "video-active"}
      src={file2}
      width="100%"
      height="500"
      controls={mainIndex !== 3 ? false : true}
    ></video>,
    // <video src={file} height="500" controls></video>,
    // <video src={file} height="500" controls></video>,
  ];

  const slideNext = () => {
    // if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
    //   setThumbAnimation(true);
    //   setThumbIndex(thumbIndex + 1);
    // }

    setMainAnimation(true);
    setMainIndex(mainIndex + 1);
    videoX = mainIndex;
  };

  const slidePrev = () => {
    // if (!thumbAnimation && thumbIndex > 0) {
    //   setThumbAnimation(true);
    //   setThumbIndex(thumbIndex - 1);
    // }
    setMainAnimation(true);
    setMainIndex(mainIndex - 1);
    videoX = mainIndex;
  };

  const syncMainBeforeChange = (e) => {
    // setMainAnimation(true);
    // setMainIndex(thumbIndex + 1);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    // if (e.type === "action") {
    //   setThumbIndex(e.item);
    //   setThumbAnimation(false);
    // } else {
    //   setMainIndex(thumbIndex - 1);
    // }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);
    console.log("e", e);

    if (!mainAnimation) {
      setMainIndex(e.item - 1);
    }
  };
  return (
    <>
      <div className="carousel-container">
        <div className="thumbnail">
          <div
            className="thumb"
            onClick={() => {
              setMainIndex(4);
              videoX = mainIndex;
            }}
          >
            <div>
              <img className="thumb__image" src={abstract01}></img>
            </div>
            <div className="thumb__details">
              <p className="thumb__details__name"> Firstname</p>
              <p className="thumb__details__description">
                {" "}
                Short blurb goes here
              </p>
            </div>
          </div>
          <div
            className="thumb"
            onClick={() => {
              setMainIndex(0);
            }}
          >
            <div>
              <img className="thumb__image" src={abstract02}></img>
            </div>
            <div className="thumb__details">
              <p className="thumb__details__name"> Firstname</p>
              <p className="thumb__details__description">
                {" "}
                Short blurb goes here
              </p>
            </div>
          </div>
          <div
            className="thumb"
            onClick={() => {
              setMainIndex(1);
            }}
          >
            <div>
              <img className="thumb__image" src={abstract03}></img>
            </div>
            <div className="thumb__details">
              <p className="thumb__details__name"> Firstname</p>
              <p className="thumb__details__description">
                {" "}
                Short blurb goes here
              </p>
            </div>
          </div>
          <div
            className="thumb"
            onClick={() => {
              setMainIndex(2);
            }}
          >
            <div>
              <img className="thumb__image" src={abstract04}></img>
            </div>
            <div className="thumb__details">
              <p className="thumb__details__name"> Firstname</p>
              <p className="thumb__details__description">
                {" "}
                Short blurb goes here
              </p>
            </div>
          </div>
          <div
            className="thumb"
            onClick={() => {
              setMainIndex(3);
            }}
          >
            <div>
              <img className="thumb__image" src={abstract02}></img>
            </div>
            <div className="thumb__details">
              <p className="thumb__details__name"> Firstname</p>
              <p className="thumb__details__description">
                {" "}
                Short blurb goes here
              </p>
            </div>
          </div>
        </div>
        {/* <div className="thumbs">
          <AliceCarousel
            responsive={responsive2}
            activeIndex={thumbIndex}
            disableDotsControls
            disableButtonsControls
            items={thumbs}
            mouseTracking={false}
            onSlideChanged={syncThumbs}
            // touchTracking={!mainAnimation}
          />
        </div> */}
        <div className="carousel">
          <button
            disabled={mainIndex === 0 ? true : false}
            className="btn-prev"
            onClick={slidePrev}
          >
            <img src={arrowLeft}></img>
          </button>
          <button
            disabled={mainIndex === 4 ? true : false}
            className="btn-next"
            onClick={slideNext}
          >
            <img src={arrowRight}></img>
          </button>
          <AliceCarousel
            activeIndex={mainIndex}
            responsive={responsive}
            animationType="fadeout"
            animationDuration={800}
            disableDotsControls
            disableButtonsControls
            infinite
            items={items2}
            mouseTracking={!thumbAnimation}
            onSlideChange={syncMainBeforeChange}
            onSlideChanged={syncMainAfterChange}
            touchTracking={!thumbAnimation}
          />
        </div>
      </div>
    </>
  );
};
export default Carousel;
