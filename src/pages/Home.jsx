import React, { useEffect, useState } from "react";
import fetchPost from "../apiCalls";
import Loading from "../components/Loading";
import MasonaryLayout from "../components/MasonaryLayout";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    fetchPost()
      .then((res) => {
        console.log(res);
        setPosts(res);
        setIsFetching(false);
      })
      .catch((err) => {
        setIsFetching(false);
        console.log(err);
      });
  }, []);

  return (
    <div
      className="text-center text-2xl h-screen bg-gray-200 py-52 md:py-80"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1122628/pexels-photo-1122628.jpeg?auto=compress&cs=tinysrgb&w=1200)",
      }}
    >
      <div className="w-full  bg-white h-screen  ">
        <div className="flex relative justify-center flex-row">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="mt-12 sm:mt-14 px-5">
            <p className="text-sm align-middle text-center text-gray-500 tracking-wide">
              Over 2.6 million+ high quality stock images, videos and music
              shared by our talented community.
            </p>
          </div>
        </div>
        <div className="sm:px-10 px-5 mt-10  h-screen">
          <div className="  ">
            <div id="Image-container" className=" w-full h-full  ">
              {isFetching ? <Loading /> : <MasonaryLayout posts={posts} />}
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Home;
