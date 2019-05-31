<template>
  <div>
    <div class="test-report">
      <card class="test-report-card">
        <div slot="header" class="test-report-card-header">
          <span>检测报告详情</span>
          <span class="test-report-card-sign">正常报告</span>
        </div>
        <div slot="content" class="card-padding">
          <div class="test-report-card-cell">机构名称：{{reportInfo.organizationName}}</div>
          <div class="test-report-card-cell">工程名称：{{reportInfo.projectName}}</div>
          <div class="test-report-card-cell">报告编号：{{reportInfo.reportNo}}</div>
          <div class="test-report-card-cell">报告日期：{{reportInfo.reportTime}}</div>
          <div class="test-report-card-cell">检测资质类别：{{reportInfo.checkType}}</div>
          <div class="test-report-card-cell">报告结果：{{reportInfo.checkResult}}</div>
          <div class="test-report-card-cell">委托单位：{{reportInfo.entrustUint}}</div>
          <div class="test-report-card-cell">见证人：{{reportInfo.eyewitness}}</div>
          <div class="test-report-card-cell">送样人：{{reportInfo.directly}}</div>
          <div class="test-report-card-cell">检测数据：{{reportInfo.checkData}}</div>
          <div class="test-report-card-cell">质量监督号：{{reportInfo.qualitySupervisionNo}}</div>
          <div class="test-report-card-cell">工程部位：{{reportInfo.engineeringParts}}</div>
          <div class="test-report-card-cell">检测项目：{{reportInfo.checkProject}}</div>
          <div class="test-report-card-cell">描述：{{reportInfo.reportDesc}}</div>
          <!-- <cell title="机构名称：">四川经准建设工程质量检测有限公司四川经准建设工程质量检测有限公司</cell>
            <cell title="工程名称：">{{reportInfo.projectName}}}</cell>
            <cell title="报告编号：">{{reportInfo.reportNo}}</cell>
            <cell title="报告日期：">{{reportInfo.reportTime}}</cell>
            <cell title="检测资质类别：">{{reportInfo.checkType}}</cell>
            <cell title="报告结果：">{{reportInfo.checkResult}}</cell>
            <cell title="委托单位：">{{reportInfo.entrustUint}}</cell>
            <cell title="见证人：">{{reportInfo.eyewitness}}</cell>
            <cell title="送样人：">{{reportInfo.directly}}</cell>
            <cell title="检测数据：">{{reportInfo.checkData}}</cell>
            <cell title="质量监督号：">{{reportInfo.qualitySupervisionNo}}</cell>
            <cell title="工程部位：">{{reportInfo.engineeringParts}}</cell>
            <cell title="检测项目：">{{reportInfo.checkProject}}</cell>
            <cell title="描述：">{{reportInfo.reportDesc}}</cell>-->
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { Card } from "vux";
export default {
  name: "test-report",
  data() {
    return {};
  },
  components: {
    Card
  },
  computed: {
    reportInfo() {
      return this.$store.state.reportInfo;
    }
  },
  methods: {
    handleQueryReport() {
      const data = {
        no: this.$route.query.no
      }
      this.$store.dispatch("handleQueryReport", data);
    }
  },
  mounted() {
    // console.log(this.$route.query.no);
    this.handleQueryReport();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/common.scss";
@import "../styles/util.scss";
.test-report {
  padding: 10px;
  background-color: #eee;
  height: calc(100vh - 20px);
  overflow: auto;
  .test-report-card-sign {
    float: right;
    background-color: #1cc200;
    color: #fff;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    // padding-top: 1px;
    // padding-bottom: 1px;
    font-size: 12px;
  }
  .test-report-card-cell {
    padding: 10px;
    position: relative;
    display: flex;
    align-items: center;
    color: #777;
    font-size: 12px;
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #e5e5e5;
      color: #f3f3f3;
      // transform-origin: 0 0;
      // transform: scaleY(0.5);
    }
  }
  .test-report-card {
    // border-top-left-radius: 10px;
    // border-top-right-radius: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    // box-shadow: 0 0px 1px #b2b2b2;
  }
  .test-report-card-header {
    padding: 14px 10px 10px;
    color: #7b7b7b;
    font-size: 13px;
    background-color: #eeeeee;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e5e5e5;
    // box-shadow: 0 0px 5px #b2b2b2;
    font-size: 12px; // border-bottom: 1px solid #d9d9d9;
  }
}
</style>
