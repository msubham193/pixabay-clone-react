import React, { useState } from "react";
import Masonry from "react-masonry-css";
import CardComponent from "./CardComponent";
import ReactPaginate from "react-paginate";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonaryLayout = ({ posts }) => {
  const itemsPerPage = 20;

  const [itemOffset, setItemOffset] = useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    
    setItemOffset(newOffset);
  };

  return (
    <>
      <Masonry
        className="flex animate-slide-fwd mb-5"
        breakpointCols={breakpointColumnsObj}
      >
        {currentItems?.map((post) => (
          <CardComponent post={post} className="w-max" />
        ))}
      </Masonry>
      <div className="flex justify-center p-5">
        <ReactPaginate
        className="flex sm:gap-5 gap-2 md:text-xl text-lg "
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default MasonaryLayout;
