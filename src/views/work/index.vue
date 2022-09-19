<template>
  <div class="work-content">
    this is work-content
    <el-button type="primary" @click="getList">开 始</el-button>
  </div>
</template>

<script>
import { getMemberList, getUrl } from '@/api/mock'
export default {
  name: 'Work',
  data() {
    return {}
  },
  created() {},
  methods: {
    async getList() {
      let data = {
        name: 'xx'
      }
      const res = await getMemberList(data)
      console.log('res => ', res);
      // const a = await getUrl();
      // console.log('aaaaaaa => ', a)
    }
  },
}
</script>