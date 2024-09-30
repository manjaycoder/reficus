import React from 'react';
import Button from "./Button";
import VideoHover from "./VideoHover";

const Product = ({ val }) => {
  return (
    <div className="w-full py-10 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-5xl font-medium capitalize font-semibold ml-10">
          {val.title}
        </h1>
        <div className="w-1/3 ">
          <VideoHover className="invisible"
            videoSrc={val.url}
             // Replace with your actual poster image
          />
        </div>
        <div className="dets w-1/3">
          <p className="mb-10 mr-20">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
