<template>
  <div class="basic-layout">
    <el-container class="basic-container">
      <el-aside class="basic-side" :style="{width: flag ? '256px' : '64px'}">
        <div class="side-header flex-center">
          <svg class="icon side-header-icon" aria-hidden="true">
            <use xlink:href="#icon-yuan_huangguan"></use>
          </svg>
          <span class="side-header-text" v-if="flag">Basic Frame</span>
        </div>
        <basic-side ref="basicSideRef"></basic-side>
      </el-aside>
      <el-container>
        <el-header class="basic-header">
          <basic-header @closeSideFn="closeSideFn"></basic-header>
        </el-header>
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
    basicSide: () => import('./components/basic-side.vue'),
    basicHeader: () => import('./components/basic-header.vue')
  },
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    closeSideFn() {
      let m = this.$refs.basicSideRef.isCollapse;
      this.flag = m;
      this.$refs.basicSideRef.setSideSpread();
    }
  },
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
    transition: width 0.3s;
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
  .basic-header {
    border-bottom: 1px solid #ccc;
  }
}
</style>
