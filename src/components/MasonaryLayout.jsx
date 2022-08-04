import React from "react";
import Masonry from "react-masonry-css";
import CardComponent from "./CardComponent";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonaryLayout = ({ posts }) => {
  return (
    <Masonry
      className="flex animate-slide-fwd"
      breakpointCols={breakpointColumnsObj}
    >
      {posts?.map((post) => (
        <CardComponent post={post} className="w-max" />
      ))}
    </Masonry>
  );
};

export default MasonaryLayout;
