<template>
  <div class="basic-header">
    <div class="basic-header-left">
      <svg class="icon close-icon" aria-hidden="true" @click="closeFn">
        <use xlink:href="#icon-renwuguanli"></use>
      </svg>
    </div>
    <el-popover placement="bottom" width="80" padding="0" class="avator-pop">
      <div slot="reference" class="basic-header-right"></div>
      <div class="">
        <div @click="logoutFn" class="avator-item">退出登录</div>
      </div>
    </el-popover>

  </div>
</template>

<script>
export default {
  name: "BasicHeader",
  data() {
    return {};
  },
  methods: {
    closeFn() {
      this.$emit("closeSideFn");
    },
    logoutFn() {
      this.$message.success("退出成功！");
      this.$store.commit("SET_DJTOKEN", null);
      this.$router.push({
        name: "Login",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.basic-header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .close-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  &-right {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: skyblue;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.avator-item {
  height: 22px;
  line-height: 22px;
  &:hover {
    background: skyblue;
  }
}
</style>
