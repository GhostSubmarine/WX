// --echarts图表数据--
// import axios from '../../utils/fetch';
// import axios from '@/service/interface';
import {
  GET_DEPOSITSPAGE4_PIEECHART1_DATA,
} from '../mutation-types.js';

const echartsData = {
  state: {
    stackLineEchart1Data: { // 堆叠折线图
      color: [],
      legendData: [], // 图例描述
      xData: [], // y轴分割区域描述
      seriesData: [], // 数据
      series: []
    },
    stackLineEchart1DataArray1: [ // 堆叠折线图数组
      {
        color: [],
        legendData: [], // 图例描述
        xData: [], // y轴分割区域描述
        seriesData: [], // 数据
        series: []
      },
      {},
      {},
      {}
    ],
    multiBarEchart1Data: {
      color: [],
      legendData: [], // 图例描述
      xData: [], // y轴分割区域描述
      seriesData: [], // 数据
      series: [],
    },
    horizontalBarEchart1Data: {
      color: [],
      titleText: '', // 标题
      subTitleText: '', // 副标题
      legendData: [], // 图例描述
      yData: [],
      seriesData: [], // 数据
      series: []
    },
    horizontalBarEchart1Data1: {
      color: [],
      titleText: '', // 标题
      subTitleText: '', // 副标题
      legendData: [], // 图例描述
      yData: [],
      seriesData: [], // 数据
      series: []
    },
    pieEchart1Data: {
      color: [],
      titleText: '', // 标题
      subTitleText: '', // 副标题
      legendData: [], // 图例描述
      seriesData: [] // 数据
    },
    pieEchart1DataArray: [
      {
        color: [],
        titleText: '', // 标题
        subTitleText: '', // 副标题
        legendData: [], // 图例描述
        seriesData: [] // 数据
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    pieEchart1DataArray1: [
      {
        color: [],
        titleText: '', // 标题
        subTitleText: '', // 副标题
        legendData: [], // 图例描述
        seriesData: [] // 数据
      },
      {},
      {},
      {},
    ]
  },
  mutations: {}
};

export default echartsData;
