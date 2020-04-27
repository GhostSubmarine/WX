import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

import echartsData from './modules/echartsData';

Vue.use(Vuex);

// 公共变量声明
const state = {
  // userName: '123', // 用户名称
  // url: 'http://111.229.97.110:3000',
  WINDOW_WIDTH_TIME: 1,
  pageSize: 15,
  pageNum: 1,
  total: 0,
  startDate: '',
  endDate: '',
  stationName: '', // 选择站点
  switchName: '', // 选择道岔
  statusName: '-1', // 选择状态
  diagnosisStatusName: '-1', // 选择故障诊断
  diagnosisStatus: '1', // 健康诊断页面，查看详情使用
  healthFile: {
    tableData: [],
    total: 0,
    rowId: ''
  },
  faultList: {
    tableData: [],
    total: 0
  },
  state: '',
  priceList: [],
  sysTableData: [],
  row: []
};

export default new Vuex.Store({
  strict: false,
  state: state,
  // mutations: {
  //   setFontSize (state, value) {
  //     state.WINDOW_WIDTH_TIME = value
  //   }
  // },
  mutations,
  actions: {},
  getters: {},
  modules: {
    echartsData: echartsData,
  }
});
