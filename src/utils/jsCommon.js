// 获取高度
const getEleNum = (eles, nums, type = '-') => {
  let getEleNum = document.getElementsByClassName(eles) || document.getElementById(eles);
  let eleHeight = getEleNum[0] ? getEleNum[0].clientHeight : getEleNum.clientHeight;
  // console.log("eleHeight--1");
  // console.log(eleHeight);
  // console.log("eleHeight--2");
  // console.log(getEleNum[0]);
  if (!eleHeight) return '0px';
  let resultNum = 0;
  if (type == '-') {
    resultNum = eleHeight - nums / 1;
  } else if (type == '+') {
    resultNum = eleHeight + nums / 1;
  }
  return resultNum;
};
export {
  getEleNum
}

/**
 *
 * @param dates
 * @param type 1. yyyy-mm-dd  2.yyyy-mm-dd h:minute:second
 * @returns {string}
 */
export const formatDate = (dates, type = 1) => {
  function format(par) {
    return par < 10 ? '0' + par : par;
  }

  let date = new Date(dates);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = format(m);
  let d = date.getDate();
  d = format(d);
  let h = date.getHours();
  h = format(h);
  let minute = date.getMinutes();
  minute = format(minute);
  let second = date.getSeconds();
  second = format(second);
  if (type == 1) {
    return y + '-' + m + '-' + d;
  } else if (type == 2) {
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  }
};

/**
 *获取当月今天
 */
export const getEndTime = () => {
  let date_ = new Date();
  let year = date_.getFullYear();
  let month = date_.getMonth() + 1;
  let day = date_.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  let lastdate = year + '-' + month + '-' + day;// 当月最后一天
  return lastdate;
};
