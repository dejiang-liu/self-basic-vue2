<template>
  <div class="sider-content">
    <el-menu
      class="side-menu"
      @select="selectMenu"
      :default-active="defaultPath"
      :unique-opened="true"
      :collapse="isCollapse"
    >
      <div v-for="(item, index) in routerList" :key="index">
        <el-submenu
          :index="item.path"
          v-if="item.children && item.children.length > 0"
        >
          <template slot="title">
            <svg class="icon item-icon" aria-hidden="true">
              <use xlink:href="#icon-yingyongfenlei"></use>
            </svg>
            <span v-if="!isCollapse">{{ item.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="(submenu, num) in item.children"
            :key="num"
            :index="submenu.path"
            >{{ submenu.meta.title }}</el-menu-item
          >
        </el-submenu>
        <el-menu-item :index="item.path" v-else>{{
          item.meta.title
        }}</el-menu-item>
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
      defaultPath: "",
      routerList: [],
      isCollapse: false,
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
      this.$router.push({
        path: val,
      });
    },
    setSideSpread() {
      console.log('set side spread');
      this.isCollapse = !this.isCollapse;
    }
  },
};
</script>

<style lang="scss" scoped>
.sider-content {
  box-sizing: border-box;
  padding: 0 0;
  .side-menu {
    background: $sideBgc;
  }
  .item-icon {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
}
</style>
