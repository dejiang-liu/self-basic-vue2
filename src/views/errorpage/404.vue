<template>
  <div class="error-page flex-column-center">
    <img :src="errimg" alt="" class="err-img">
    <el-button type="primary" class="err-btn" @click="back2index">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: "NotFind",
  data() {
    return {
      errimg: require('@/assets/img/404错误.png')
    };
  },
  methods: {
    back2index() {
      this.$router.push({
        path: '/'
      })
    }
  },
};
</script>
<style scoped lang="scss">
.error-page {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 150px;
  .err-img {
    width: 400px;
    height: 400px;
  }
}
</style>