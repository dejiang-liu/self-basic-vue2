import axios from "axios";
import router from '@/router/index';
import store from '@/store/index';

axios.defaults.headers.common["Accept"] = "*/*";
axios.defaults.headers.post["Content-Type"] = "application/json"; // 配置请求头
axios.defaults.headers.delete["Content-Type"] =
  "application/json;charset=UTF-8"; // 配置请求头

let headers = {
  Accept: "application/json",
  "Content-type": "multipart/related; type=application/dicom",
};

// 添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    const djtoken = store.state.djtoken;
    if (djtoken) { config.headers.Authorization = 'Bearer ' + djtoken; }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
);
// 添加一个响应拦截器
axios.interceptors.response.use(
  res => {
    const { code } = res.data;
    if (!code) {
      router.push({
        name: 'Login'
      });
      this.$message.error(res.data.msg);
    }
    return res;
  },
  err => {
    return Promise.reject(err);
  }
)
let base = '';

export const POST = (url, params) => {
  return axios.post(`${base}${url}`, params).then((res) => res.data);
};
export const GET = (url, params) => {
  return axios
    .get(`${base}${url}`, { params })
    .then((res) => res.data);
};