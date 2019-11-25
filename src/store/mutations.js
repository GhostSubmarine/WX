// 公共数据请求
import {
  GET_FAULT_LIST_TABLE_DATA,
  GET_HEALTH_FIST_TABLE_DATA,
} from './mutation-types.js';
import { getData } from '@/service/getData'

export default {
  // 健康状态-表格获取
  [GET_HEALTH_FIST_TABLE_DATA] (state, userName) {
    let url = '/healthRecord/list'
    let params = {
      pageSize: '15',
      pageNum: state.pageNum,
      // stationName: '', // state.stationName,
      // switchName: '', // state.switchName,
      stationName: state.stationName,
      switchName: state.switchName,
      levelStatus: state.statusName
    }
    getData(url, params, 'get').then(res => {
      if (res.data) {
        state.healthFile.total = res.data.total
        state.healthFile.tableData = res.data.list
      } else {
        state.healthFile.total = 0
        state.healthFile.tableData = []
      }
    })
  },
  // 健康诊断-表格获取
  [GET_FAULT_LIST_TABLE_DATA] (state, userName) {
    let url = '/healthStatus/malfunctionList'
    let newStationName = state.stationName === '-1' ? '' : state.stationName // 全部'-1',王璜要求-1时传空''
    let newSwitchName = state.switchName === '-1' ? '' : state.switchName // 全部'-1',王璜要求-1时传空''
    let dataType = state.diagnosisStatusName === '-1' ? '' : state.diagnosisStatusName // 全部'-1',王璜要求-1时传空''
    let params = {
      pageSize: '15',
      pageNum: state.pageNum,
      // stationName: '', // state.stationName,
      // switchName: '', // state.switchName,
      stationName: newStationName,
      switchName: newSwitchName,
      dataType: dataType, // 诊断结果
      start: state.startDate,
      end: state.endDate
    }
    getData(url, params, 'get').then(res => {
      if (res) {
        state.faultList.total = res.total
        state.faultList.tableData = res.data
        // state.faultList.total = 40 // res.total
        // state.faultList.tableData = data // res.data
      } else {
        state.faultList.total = 0
        state.faultList.tableData = []
      }
    })
  }
}
