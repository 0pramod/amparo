import React from "react";
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
} from "../../assets/images.js";
import file from "../../assets/videos/file.mp4";
const handleDragStart = (e) => e.preventDefault();

const thumb = [
  <img
    src={board}
    width="100"
    height="100"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={board}
    width="100"
    height="100"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={board}
    width="100"
    height="100"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={board}
    width="100"
    height="100"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const items = [
  // <img src={board} onDragStart={handleDragStart} role="presentation" />,
  // <img src={board} onDragStart={handleDragStart} role="presentation" />,
  // <img src={board} onDragStart={handleDragStart} role="presentation" />,
  // <img src={board} onDragStart={handleDragStart} role="presentation" />,
  // <img src={board} onDragStart={handleDragStart} role="presentation" />,

  //

  <video src={file} width="100%" height="500" controls></video>,
  <video src={file} width="100%" height="500" controls></video>,
  <video src={file} width="100%" height="500" controls></video>,
  <video src={file} width="100%" height="500" controls></video>,
  // <video src={file} height="500" controls></video>,
  // <video src={file} height="500" controls></video>,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const responsive2 = {
  1024: { items: 4 },
};

const Carousel = () => {
  return (
    <>
      <AliceCarousel
        mouseDragEnabled={false}
        disableDotsControls={false}
        responsive={responsive2}
        items={thumb}
      ></AliceCarousel>
      <AliceCarousel
        mouseTracking
        items={items}
        // paddingLeft={50}
        // paddingRight={50}
        startIndex={1}
        infinite={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayActionDisabled={true}
      />
    </>
  );
};
export default Carousel;
