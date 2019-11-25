const colorData = {
  type0: [
    '#29B6FF',
    '#10DD95'
  ],
  type1: [
    '#9C75FF',
  ],
  type2: [
    '#29B6FF'
  ],
  type3: [
    '#FF9240',
  ],
  type4: [
    '#10DD95',
    '#FF9240',
    '#29B6FF'
  ],
  type5: [
    '#10DD95',
    '#FF9240',
  ],
  type6: [
    '#FF9240',
    '#29B6FF'
  ],
  type7: [
    '#29B6FF',
    '#9C75FF',
    '#FF9240',
    '#DA3F81',
    '#10DD95',
    '#69DEFB',
  ],
};

// 返回_系统共用图表颜色
const getEchartsColor = (type) => {
  let colorArray = [];
  if (type) {
    colorArray = colorData[type];
  } else {
    colorArray = colorData.type1;
  }
  return colorArray;
};

// 公共字体大小处理
const viewPort = window.innerWidth || window.outerWidth;
// console.log(viewPort);
let rootFontSize = 13;
if (viewPort <= 1920) rootFontSize = 13;
if (viewPort > 1920 && viewPort <= 5760) rootFontSize = 28;
if (viewPort > 5700) rootFontSize = 30;

export {
  getEchartsColor,
  rootFontSize,
};
