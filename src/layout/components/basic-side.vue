<template>
  <div class="sider-content">
    <el-menu class="side-menu" @select="selectMenu" :default-active="defaultPath" :unique-opened="true">
      <div v-for="(item, index) in routerList" :key="index">
        <el-submenu :index="item.path" v-if="item.children && item.children.length > 0"  >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.meta.title}}</span>
          </template>
          <el-menu-item v-for="(submenu, num) in item.children" :key="num" :index="submenu.path">{{submenu.meta.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path" v-else>{{item.meta.title}}</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { moduleArr } from "@/router/index";

export default {
  name: "BasicSide",
  data() {
    return {
      defaultPath: '',
      routerList: [],
    };
  },
  created() {
    this.defaultPath = moduleArr[0].path;
  },
  mounted() {
    console.log("this.moduleArr => ", moduleArr);
    this.setSideFn();
  },
  methods: {
    setSideFn() {
      const arr = JSON.parse(JSON.stringify(moduleArr));
      this.routerList = arr;
    },
    selectMenu(val) {
      if (this.$route.path == val) {
        return;
      }
      this.$router.push({
        path: val,
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.sider-content {
  box-sizing: border-box;
  padding: 0 26px;
  .side-menu {
    background: $sideBgc;
  }
}
</style>
