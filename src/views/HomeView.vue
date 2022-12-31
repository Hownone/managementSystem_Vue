<template>
  <div>
    <div id="main" style="height: 400px"></div>
    <div id="main2" style="height: 400px"></div>
    <div class="total">总人数:{{ data.length }}</div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import data from "../data";
export default {
  data() {
    return {
      data
    }
  },
  methods: {
    initCharts1() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "客户性别",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "客户性别",
            type: "pie",
            radius: "50%",
            data: [
              {
                value: data.filter((item) => item.sex === "男").length,
                name: "男",
              },
              {
                value: data.filter((item) => item.sex === "女").length,
                name: "女",
              },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    initCharts2() {
      var chartDom = document.getElementById("main2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "客户负责人",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: ["负责人1", "负责人2", "负责人3", "负责人4", "负责人5"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              data.filter((item) => item.amin === "负责人1").length,
              data.filter((item) => item.amin === "负责人2").length,
              data.filter((item) => item.amin === "负责人3").length,
              data.filter((item) => item.amin === "负责人4").length,
              data.filter((item) => item.amin === "负责人5").length,
            ],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },

  },
  mounted() {
    this.initCharts1();
    this.initCharts2();
  },
};
</script>
<style scoped>
.total {
  position: absolute;
  right: 220px;
  top: 100px;
  width: 80px;
  height: 16px;
  text-align: center;
  color: #fff;
  line-height: 16px;
  background-color: #0094ff;
  padding: 6px;
  border-radius: 4px;
  font-size: 12px;
}
</style>
