const { default: axios } = require("axios");

const fetchPost = async (searchTerm = "", order = "", category = "") => {
  let URL = `https://pixabay.com/api/?key=16916589-03eeee4ec48f84c06d8b366f7&q=${searchTerm}&order=${order}&category=${category}&per_page=100`;
  if (category) {
    URL = `https://pixabay.com/api/?key=16916589-03eeee4ec48f84c06d8b366f7&order=${order}&category=${category}&per_page=100`;
  } else if (searchTerm) {
    URL = `https://pixabay.com/api/?key=16916589-03eeee4ec48f84c06d8b366f7&q=${searchTerm}&order=${order}&per_page=100`;
  }

  const { data } = await axios.get(URL);

  return data.hits;
};

export default fetchPost;
