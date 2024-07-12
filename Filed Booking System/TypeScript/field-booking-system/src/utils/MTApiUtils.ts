import axios from "axios";
import { toast } from "react-toastify";

export let requests: string[] = [];

const MTAuthorizedInstance = axios.create({
  baseURL: process.env.REACT_APP_PROXY_PREFIX,
  timeout: 45000,
});

const handleInterceptorError = async (error: any, originalRequest: any) => {
  if (error.code === "ECONNABORTED") {
    return Promise.reject(error);
  }
  if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      return MTAuthorizedInstance(originalRequest);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
};

MTAuthorizedInstance.interceptors.response.use(
  (response: any) => response,
  async (error: any) => {
    const originalRequest = error.config;
    return handleInterceptorError(error, originalRequest);
  }
);

const handleError = (errorData: any, url?: string) => {
  if (url) removeRequest(url);
  if (errorData?.response) {
    const { status, data } = errorData.response;
    switch (status) {
      case 401:
      case 403:
        toast.error(data?.message || "Unauthorized access");
        break;
      case 400:
      case 500:
      case 502:
      case 503:
        toast.error(data?.message || "Something went wrong");
        break;
      default:
        toast.error(data?.message || "Something went wrong");
        break;
    }
  }
};

const showLoader = (url?: string) => {
  if (url) requests.push(url);
  document.body.classList.add("loader-open");
};

const hideLoader = () => {
  document.body.classList.remove("loader-open");
};

const removeRequest = (url: string) => {
  const index = requests.findIndex((x) => x === url);
  if (index >= 0) {
    requests.splice(index, 1);
  }
  if (requests.length === 0) hideLoader();
};

export const MTApiPost = async (
  url: any,
  payload: any = null,
  isHideLoader = false,
  isThrowError = false,
  timeout = 45000
) => {
  if (!isHideLoader) showLoader(url);
  try {
    const response = await MTAuthorizedInstance.post(url, payload, { timeout });
    removeRequest(url);
    return response;
  } catch (error) {
    handleError(error, url);
    if (isThrowError) throw error;
  }
};

export const MTApiGet = async (
  url: any,
  params?: any,
  isHideLoader = false,
  isThrowError = false
) => {
  if (!isHideLoader) showLoader(url);
  try {
    const response = params
      ? await MTAuthorizedInstance.get(url, { params })
      : await MTAuthorizedInstance.get(url);
    removeRequest(url);
    return response;
  } catch (error) {
    handleError(error, url);
    if (isThrowError) throw error;
  }
};

export const MTApiPut = async (
  url: any,
  payload: any = null,
  isHideLoader = false,
  isThrowError = false
) => {
  if (!isHideLoader) showLoader(url);
  try {
    const response = await MTAuthorizedInstance.put(url, payload);
    removeRequest(url);
    return response;
  } catch (error) {
    handleError(error, url);
    if (isThrowError) throw error;
  }
};

export const MTApiDelete = async (
  url: any,
  payload: any = null,
  isHideLoader = false
) => {
  if (!isHideLoader) showLoader(url);
  try {
    const response = payload
      ? await MTAuthorizedInstance.delete(url, { data: payload })
      : await MTAuthorizedInstance.delete(url);
    removeRequest(url);
    return response;
  } catch (error) {
    handleError(error, url);
  }
};
