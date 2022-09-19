<template>
  <div class="analysis-content">
    数据分析
    <el-button type="primary" @click="getList">开 始</el-button>
    <div class="">
      <line-chart :option="lineOption" width="650px" height="450px"></line-chart>
    </div>
  </div>
</template>

<script>
import { lineData, memberList } from "@/mock/mock";
export default {
  name: "Analysis",
  components: {
    lineChart: () => import("@/components/echarts/lineChart.vue"),
  },
  data() {
    return {
      lineInfo: [],
      memberInfo: [],
      lineOption: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
  methods: {
    async getList() {
      this.lineInfo = lineData().dataList;
      this.memberInfo = memberList().memberList;
      console.log("获取的信息 =》", this.lineInfo);
      console.log("获取的信息 =》", this.memberInfo);
    },
  },
};
</script>

<style lang="scss" scoped></style>
