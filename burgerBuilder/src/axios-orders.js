import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-ed87e.firebaseio.com/"
});

export default instance;
