import axios from "axios";
import {
  KEY_ACCESS_TOKEN,
  getItem,
  removerItem,
  setItem,
} from "./localStorageManager";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
  const accessToken = getItem(KEY_ACCESS_TOKEN);
  if (accessToken) {
    request.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return request;
});

axiosClient.interceptors.response.use(
  async (response) => {
    const data = response.data;
    if (data.status === "ok") {
      return data;
    }
    return response;
  },
  async (error) => {
    if (!error.response) {
      // Network error
      console.error("Network Error:", error.message);
      return Promise.reject(error);
    }

    const { status, config } = error.response;
    if (status === 401 && !config.retry) {
      // Access token expired, try refreshing
      config.retry = true;

      try {
        const refreshResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`,
          { withCredentials: true }
        );

        if (refreshResponse.data.status === "ok") {
          const newAccessToken = refreshResponse.data.result.accessToken;
          setItem(KEY_ACCESS_TOKEN, newAccessToken);
          config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axios(config);
        } else {
          removerItem(KEY_ACCESS_TOKEN);
          window.location.replace("/login"); // Redirect to login page if refresh fails
          return Promise.reject(error);
        }
      } catch (refreshError) {
        console.error("Token Refresh Error:", refreshError.message);
        removerItem(KEY_ACCESS_TOKEN);
        window.location.replace("/login"); // Redirect to login page if refresh throws an error
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
