import React from "react";

const PhotosScroll = () => {
  return (
    <div id="livingroom" className="flex mt-32 justify-between">
      <div id="livingRoom">
        <h1 className="sticky top-0 p-4 z-10">Shared living room</h1>
      </div>

      <div className="grid gap-2 w-1/2 h-auto rounded-lg shadow-lg">
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/069aff65-469c-4724-84ab-08730fc3b87d.jpeg?im_w=1200&im_format=avif"
            alt="1st photo"
          />
        </div>
        <div className="flex  gap-2">
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/b9e6f647-80c7-4cbd-b4d2-576a915e3bef.jpeg?im_w=720&im_format=avif"
              alt="2nd 1st photo"
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/9f3044b3-f9c6-4222-aa47-1b1adef97e3a.jpeg?im_w=720&im_format=avif"
              alt="2nd 2nd photo"
            />
          </div>
        </div>
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/f81cb872-eb31-45f3-ba31-842c7686b2e3.jpeg?im_w=1200&im_format=avif"
            alt=""
          />
        </div>
        <div className="flex  gap-2">
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/cc6ed3a1-d184-4f1b-947a-0e64f383f463.jpeg?im_w=720&im_format=avif"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-43121446/original/bcaf3af5-f372-4f7c-9a42-064def55e726.jpeg?im_w=720&im_format=avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosScroll;
