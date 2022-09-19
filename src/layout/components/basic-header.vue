<template>
  <div class="basic-header">
    <div class="basic-header-left">
      <svg class="icon close-icon" aria-hidden="true" @click="closeFn">
        <use xlink:href="#icon-renwuguanli"></use>
      </svg>
    </div>
    <div class="flex-end">
      <span class="basic-header-date">{{ today }}</span>
      <el-popover placement="bottom" width="80" padding="0" class="avator-pop">
        <div slot="reference" class="basic-header-right"></div>
        <div class="">
          <div @click="logoutFn" class="avator-item">退出登录</div>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: "BasicHeader",
  data() {
    return {
      today: '',
    };
  },
  mounted() {
    this.today = dayjs().format('YYYY-MM-DD') + " 星期" + this.resetWeek(dayjs().day());
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
    resetWeek(val) {
      let cweek = '';
      let num = Number(val);
      switch(num) {
        case 1: 
          cweek = '一';
          break;
        case 2:
          cweek = '二';
          break;
        case 3:
          cweek = '三';
          break;
        case 4:
          cweek = '四';
          break;
        case 5:
          cweek = '五';
          break;
        case 6:
          cweek = '六';
          break;
        case 7:
          cweek = '日';
          break;
        default:
          cweek = 'err';
      }
      return cweek;
    }
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
  &-date {
    margin-right: 10px;
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
