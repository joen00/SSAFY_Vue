import axios from "axios";

// 파일보내는거 이렇게 하면 안된다.
export default axios.create({
  baseURL: "http://localhost:9999/vuews",
  headers: {
    "Content-type": "application/json", // front -> back으로 보내는 데이터 형식
  },
});
