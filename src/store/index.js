import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import { handleQueryReport } from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reportInfo: {
      // "reportNo": "钢2019--10241",
      // "organizationName": "四川精准建设工程质量检测有限公司",
      // "projectName": "自治县交通设施综合建设工程（第二批）",
      // "reportTime": 1558713600000,
      // "checkType": "其他",
      // "checkResult": "一切正常",
      // "entrustUint": "岭南生态文旅股份有限公司",
      // "eyewitness": "何正云",
      // "directly": "先良君",
      // "checkData": "这是检测数据",
      // "qualitySupervisionNo": "no1121233",
      // "engineeringParts": "杨竹巴B区2号",
      // "checkProject": "热轧钢筋2018",
      // "reportDesc": "这是一条测试数据",
      // "qrUrl": null
    }
  },
  mutations: {
    updateReportList(state, params) {
      state.reportInfo = params
    }
  },
  actions: {
    async handleQueryReport({ commit }, { no }) {
      const res = await handleQueryReport({ no })
      commit('updateReportList', res.data)
    }
  },
  modules: {
    user,
    app
  }
})
