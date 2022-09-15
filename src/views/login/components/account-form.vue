<template>
  <div class="account-form">
    <el-form
      :model="accountForm"
      :hide-required-asterisk="hideMark"
      :rules="rules"
      ref="accountForm"
      label-width="100px"
    >
      <el-form-item label="账 号：" prop="account">
        <el-input
          placeholder="account: admin"
          v-model="accountForm.account"
          class="form-input"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          placeholder="password: admin"
          v-model="accountForm.password"
          class="form-input"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { login } from "@/api/index";
export default {
  name: "AccountForm",
  data() {
    return {
      accountForm: {
        account: "",
        password: "",
      },
      hideMark: true,
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    // ...mapMutations(['SET_CZTOKEN', 'SET_DJTOKEN']),
    submit() {
      this.$refs.accountForm.validate((res) => {
        if (res) {
          this.sendForm();
        }
      });
    },
    async sendForm() {
      if (
        this.accountForm.account == "admin" &&
        this.accountForm.password == "admin"
      ) {
        this.$message.success("success");
        this.$store.commit("SET_DJTOKEN", "cccc");
      }
      const data = await login();
      console.log("send form res => ", data);
      // this.$store.commit("login/SET_CZTOKEN", "aabb");
      // this.$store.commit("SET_DJTOKEN", "cccc");
      // this.$store.commit("SET_XX", "xxxx");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  width: 320px;
}
</style>
