import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "70135c20d56e42bb997c08e7e8dcb0d7",
  },
});
