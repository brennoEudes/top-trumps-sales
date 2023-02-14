import axios from "axios";

//const apiUrls = {
//development: "http://localhost:1337/api",
//production: "https://saleapi.onrender.com/api",
//};
//apiUrls[process.env.NODE_ENV]
const api = axios.create({
  baseURL: "https://saleapi.onrender.com/api",
});

//cabeçalho da requisição
api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer d6d760248fddb631caeb742dce3f66580dd53746c3b66163768645e5603b44e0c0ef1769ac71d1a6e4d68696876f1088820711ed0c66b8fffae921c09330025d3aea61d9c380401466e32dcc091e4b245e815a0ef447f6d86422c04218acc7e8495c4f84cda67c31cdf59aa85bd9182b3168a184c6dee7a0d50e5476de4267ee`,
  };
  return config;
});

export { api };
