import axiosRequest from './$axios';

// 统一接口处理
let getData = (url, params, type = 'GET', opt = {}) => {
  let result = axiosRequest(url, params, type, opt);
  result.then((res) => {
    // 预留，是否已登录
    return res;
  }).catch(error => {
    return error;
  });
  return result;
};

export { getData };
