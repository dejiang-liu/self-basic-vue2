<template>
  <div class="line-chart">
    折线图
    <div :id="lineChartId" :style="style" class=""></div>
  </div>
</template>

<script>
import { algorithmId } from '@/utils/util';
import * as echarts from 'echarts';

export default {
  name: 'LineChart',
  props: {
    height: {
      type: String,
      default: '400px',
    },
    width: {
      type: String,
      default: '600px',
    },
    option: {
      type: Object,
      default: {},
    }
  },
  data() {
    return {
      lineChartId: null,
      myChart: null,
    }  
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
      }
    },
  },
  watch: {
    option: {
      handler: function(val) {
        if (this.myChart) {
          this.myChart.resize({
            Animation: {
              duration: 300,
            }
          })
        }
      },
      deep: true
    }
  },
  created() {
    this.lineChartId = algorithmId();
    console.log('weiyi id => ', this.lineChartId);
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById(this.lineChartId));
    this.myChart.setOption(this.option)
  },
  methods: {}
}
</script>