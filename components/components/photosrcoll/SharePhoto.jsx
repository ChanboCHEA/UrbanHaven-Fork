import React from "react";
import PhotosScroll from "./PhotosScroll";
import PhotoKitchen from "./PhotoKitchen";
import PhotoDining from "./PhotoDining";
import PhotoBedroom from "./PhotoBedroom";
import PhotoBathroom from "./PhotoBathroom";

const SharePhoto = () => {
  return (
    <div className="mx-48 ">
      <PhotosScroll />
      <PhotoKitchen />
      <PhotoDining />
      <PhotoBedroom />
      <PhotoBathroom />
    </div>
  );
};

export default SharePhoto;
