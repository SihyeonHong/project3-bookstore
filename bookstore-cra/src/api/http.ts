import axios, { AxiosRequestConfig } from "axios";
import { getToken, removeToken } from "../store/authStore";

const BASE_URL = "http://localhost:8888";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    ...config,
  });

  // 요청 인터셉터를 추가하여 요청을 보낼 때마다 헤더에 토큰을 설정합니다.
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = token; // 동적으로 토큰 설정
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        // 토큰 만료
        removeToken();
        window.location.href = "/login";
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
/* export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken() ? getToken() : "",
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // token expired
        removeToken();
        window.location.href = "/login";
        return;
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}; */

export const httpClient = createClient();
