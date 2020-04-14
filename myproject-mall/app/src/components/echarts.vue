<template>
  <div>
    <div style="width:800px;height:400px" ref="chart"></div>
  </div>
</template>

<script>
const echarts = require('echarts');

export default {
  data() {
    return {

    };
  },
  methods: {
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption({
        title: { text: "商品总信息" },
        tooltip: {},
         legend: {
                data:['销量']
            },
        xAxis: {
          data: ["本月订单总数", "本周订单总数", "上月订单总数", "上周订单总数"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10]
          }
        ]
      });
    }
  },
  mounted() {
    this.initCharts();
  }
}
</script>

<style  scoped>
</style>