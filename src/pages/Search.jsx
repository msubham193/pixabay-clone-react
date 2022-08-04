import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import MasonaryLayout from "../components/MasonaryLayout";
import  fetchPost  from "../apiCalls";
import Loading from "../components/Loading";
import SelectComponent from "../components/Select";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [category, setCategory] = useState("");
  let { keyword } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsFetching(true);
  
    fetchPost(keyword, order, category)
      .then((res) => {
        console.log(res);
        setPosts(res);
        setIsFetching(false);
      })
      .catch((err) => {
        setIsFetching(false);
        console.log(err);
      });
  }, [keyword, order, category]);

  console.log(order);

  return (
    <div
      className="text-center text-2xl h-screen bg-black py-32"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1122628/pexels-photo-1122628.jpeg?auto=compress&cs=tinysrgb&w=1200)",
      }}
    >
      <div className="w-full  bg-white h-screen  ">
        <div className="flex relative justify-center flex-row">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="mt-12 sm:mt-14 px-5">
            {" "}
            <h1 className="sm:text-3xl  text-2xl font-extrabold tracking-wider  first-letter:uppercase">
              {keyword}
            </h1>
            <p className="text-sm align-middle text-center text-gray-500 tracking-wide">
              2500 Unique {keyword} images, videos and music hared by our
              talented community
            </p>
          </div>
        </div>
        <div className="sm:px-10 px-5 mt-10  h-screen">
          <div className="  ">
            <div className="flex  items-center justify-between  ">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Sort</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={order}
                  label="Sort"
                  onChange={(e) => setOrder(e.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"popular"}>Popular</MenuItem>
                  <MenuItem value={"latest"}>Latest</MenuItem>
                </Select>
              </FormControl>

              <SelectComponent setCategory={setCategory} category={category} setSearchTerm={setSearchTerm} />
            </div>

            <div id="Image-container" className=" w-full h-full  ">
              {isFetching ? <Loading /> : <MasonaryLayout posts={posts} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
