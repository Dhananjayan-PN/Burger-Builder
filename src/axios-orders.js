import axios from "axios";

export default axios.create({
  baseURL: "https://burger-builder-71f50-default-rtdb.firebaseio.com/"
});
