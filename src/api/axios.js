import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "28bf7a3b748316d84f47dd1c712b39be",
    language: "ko-KR",
  },
});

export default instance;
