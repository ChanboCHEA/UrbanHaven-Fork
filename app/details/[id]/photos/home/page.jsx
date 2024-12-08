import React from "react";

/* import TopPhotos from "@/components/topPhoto/TopPhotos";
import PhotosScroll from "@/components/photosrcoll/PhotosScroll";
import PhotoKitchen from "@/components/photosrcoll/PhotoKitchen";
import SharePhoto from "@/components/photosrcoll/SharePhoto"; */
import NavBar from "@/components/components/NavBar";
import TopPhotos from "@/components/components/topPhoto/TopPhotos";
import PhotosScroll from "@/components/components/photosrcoll/PhotosScroll";
import PhotoKitchen from "@/components/components/photosrcoll/PhotoKitchen";
import SharePhoto from "@/components/components/photosrcoll/SharePhoto";

const HomepagePhoto = () => {
  return (
    <div className="text-black">
      <NavBar />
      <TopPhotos />
      <SharePhoto />
    </div>
  );
};

export default HomepagePhoto;
