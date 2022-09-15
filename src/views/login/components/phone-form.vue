<template>
  <div class="phone-form">
    <el-form
      :model="phoneForm"
      :rules="rules"
      :hide-required-asterisk="hideMark"
      ref="phoneForm"
      label-width="100px"
    >
      <el-form-item label="手机号：" prop="phone">
        <el-input
          placeholder="phone: 18266668888"
          v-model="phoneForm.phone"
          class="form-input"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码：" prop="verifycode">
        <el-input
          placeholder="Verification Code: 123456"
          v-model="phoneForm.verifycode"
          class="form-input"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "PhoneForm",
  data() {
    return {
      phoneForm: {
        phone: "",
        verifycode: null,
      },
      hideMark: true,
      rules: {
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        verifycode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.phoneForm.validate(res => {
        console.log('phone form validate res => ', res);
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.form-input {
  width: 320px;
}
</style>
