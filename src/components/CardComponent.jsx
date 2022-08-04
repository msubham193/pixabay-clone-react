import React, { Fragment, useState } from "react";
import BigDialog from "./BigDialog";

const CardComponent = ({ post }) => {
  const [postHovered, setPostHovered] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <BigDialog setOpen={setOpen} isOpen={isOpen} post = {post}/>
      <div className="m-2 ">
        <div
          onMouseEnter={() => setPostHovered(true)}
          onMouseLeave={() => setPostHovered(false)}
          onClick={() => setOpen(!isOpen)}
          className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
        >
          {post.webformatURL ? (
            <img className="rounded-lg w-full " src={post.webformatURL} alt="" />
          ) : (
            ""
          )}

          {postHovered && (
            <div
              className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50 ease-in-out  duration-300"
              style={{ height: "100%" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2"></div>
              </div>
              <div className=" flex items-center gap-2 w-full bg-black rounded-xl  opacity-60 p-1">
                <div className="flex gap-2 items-center  w-full h-full  ">
                  <img
                    alt="Remy Sharp"
                    src={post?.userImageURL}
                    className="z-50 rounded-full h-10 w-10"
                  />

                  <div>
                    <p className="text-sm text-white">{post.user}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CardComponent;
