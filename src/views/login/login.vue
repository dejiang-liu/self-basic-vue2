<template>
  <div class="login-content flex-center">
    <div class="login-card">
      <el-menu
        :default-active="activeIndex"
        class="login-card-header"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">密码登录</el-menu-item>
        <el-menu-item index="2">手机登录</el-menu-item>
      </el-menu>
      <div class="login-card-form">
        <account-form
          ref="accountComp"
          v-show="activeIndex == '1'"
        ></account-form>
        <phone-form ref="phoneComp" v-show="activeIndex == '2'"></phone-form>
      </div>
      <div class="login-card-btn flex-center">
        <el-button @click="loginFn">登 录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    accountForm: () => import("./components/account-form.vue"),
    phoneForm: () => import("./components/phone-form.vue"),
  },
  data() {
    return {
      activeIndex: "1",
      hideMark: true,
    };
  },
  mounted() {
    setTimeout(() => {
      console.log("this.state", this.$store.state);
      console.log('this.login => ', this.$store.state.login);
    }, 2000);
  },
  methods: {
    handleSelect(val) {
      this.activeIndex = val;
    },
    btnFn() {
      this.$message.success("success");
    },
    loginFn() {
      this.$message.success("success");

      this.activeIndex == "1"
        ? this.$refs.accountComp.submit()
        : this.$refs.phoneComp.submit();
    },
  },
};
</script>

<style lang="scss" scoped>
.login-content {
  width: 100%;
  min-height: 100vh;
  background: url("@/assets/img/login-bg.png") no-repeat;
  background-size: 100% 100%;
  .login-card {
    width: 500px;
    height: 300px;
    border-radius: 10px;
    background: #fff;
    &-header {
      background: transparent;
      display: flex;
      justify-content: space-around;
    }
    &-form {
      padding-top: 45px;
    }
  }
}
.text1 {
  color: $titleColor;
}
</style>
