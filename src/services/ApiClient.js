import ApiClient from "./Axios.Config";

const api = {
  get: (url, params) => ApiClient.get(url, { params }),
  post: (url, data) => ApiClient.post(url, data),
  put: (url, data) => ApiClient.put(url, data),
  delete: (url) => ApiClient.delete(url),
};

export default api;
