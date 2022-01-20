import axios from "axios";

const getAccessToken = () => {
  const token = window.localStorage.getItem("accessToken");
  return token;
};

export const axiosInstance = axios.create({
  baseURL: "http://api.doanky5.huyhoangdev.engineer/api",
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
