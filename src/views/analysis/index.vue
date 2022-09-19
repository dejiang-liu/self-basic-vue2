<template>
  <div class="analysis-content">
    数据分析
    <el-button type="primary" @click="getList">开 始</el-button>
  </div>
</template>

<script>
import { getMemberList, getUrl, lineDataList } from "@/api/mock";
import { login } from '@/api/index'
export default {
  name: "Analysis",
  data() {
    return {};
  },
  methods: {
    async getList() {
      let data = {
        name: "xx",
      };
      const res = await getMemberList(data)
      console.log('res => ', res);
      // const a = await lineDataList();
      // console.log("bbbbb => ", a);
    },
  },
};
</script>

<style lang="scss" scoped></style>
