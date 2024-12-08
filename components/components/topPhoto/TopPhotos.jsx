import React from "react";
import SmallPhotoCard from "./SmallPhotoCard";
import SmallTopKitchen from "./SmallTopKitchen";
import SmallTopBedroom from "./SmallTopBedroom";
import SmallTopBathroom from "./SmallTopBathroom";

const TopPhotos = () => {
  return (
    <>
      <div className="mx-48 ">
        <div className="p-6     ">
          <h3>Photo tour</h3>
        </div>

        <div className="flex gap-2">
          <SmallPhotoCard />
          <SmallTopKitchen />
          <SmallTopBedroom />
          <SmallTopBathroom />
          <SmallPhotoCard />
          <SmallTopKitchen />
        </div>
      </div>
    </>
  );
};

export default TopPhotos;
