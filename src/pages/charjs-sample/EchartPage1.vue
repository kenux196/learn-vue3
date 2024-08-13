<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup>
import { PieChart } from 'echarts/charts';
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { useQuasar } from 'quasar';
import { provide, ref } from 'vue';
import VChart, { THEME_KEY } from 'vue-echarts';

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

const $q = useQuasar();
provide(THEME_KEY, $q.dark.isActive ? 'dark' : 'light');

const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 325, name: 'Email' },
        { value: 211, name: 'Ad Networks' },
        { value: 115, name: 'Video Ads' },
        { value: 435, name: 'Search Engines' },
      ],
      emhasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});
</script>
<style scoped>
.chart {
  height: 400px;
}
</style>
