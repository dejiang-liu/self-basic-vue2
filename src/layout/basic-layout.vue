<template>
  <div class="basic-layout">
    <el-container class="basic-container">
      <el-aside class="basic-side">
        <div class="side-header flex-center">
          <svg class="icon side-header-icon" aria-hidden="true">
            <use xlink:href="#icon-yuan_huangguan"></use>
          </svg>
          <span class="side-header-text">Basic Frame</span>
        </div>
        <basic-side></basic-side>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "BasicLayout",
  components: {
    basicSide: () => import('./components/basic-side.vue')
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.basic-layout {
  box-sizing: border-box;
  height: 100vh;
  .basic-container {
    height: 100%;
  }
  .basic-side {
    background: $sideBgc;
    width: 256px;
    .side-header {
      height: 65px;
      &-icon {
        width: 40px;
        height: 40px;
      }
      &-text {
        font-size: 18px;
        color: #222;
        font-weight: bold;
      }
    }
  }
}
</style>
