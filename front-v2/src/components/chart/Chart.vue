<template>
  <canvas id="planet-chart" class="teste"></canvas>
</template>


<script>
import Chart from 'chart.js';
import { planetChartData } from './Grafico.js';

export default {
  name: 'Chart',
  props: {
    msg: String
  },

  data() {
    return {
      planetChartData: planetChartData,
    }
  },

  methods: {
  createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
  }
},

  mounted() {
  this.createChart('planet-chart', this.planetChartData);
}

}


</script>

<style>

#teste {
  width: 1200px;
  height: 100px;
}


</style>