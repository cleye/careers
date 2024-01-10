<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import { PROFESSIONS, type Profession, type EstimatedSalary } from '../salaries';
import Multiselect from 'vue-multiselect';
import ProfessionPlot from '@/components/ProfessionPlot.vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Ticks, Colors, Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale, type ChartData, type ChartOptions, type Point } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, Colors, PointElement, LineElement, CategoryScale, LinearScale);


let value: Ref<Profession[]> = ref([]);
const selectedOption = ref('');

const ACADEMICS = PROFESSIONS.filter(p => p.type == "ACADEMIC").sort((a, b) => a.name.localeCompare(b.name));
const TRADES = PROFESSIONS.filter(p => p.type == "TRADE").sort((a, b) => a.name.localeCompare(b.name));
let options = ref([
  {type: "Academic", professions: ACADEMICS},
  {type: "Trade", professions: TRADES},
]);


const YEARS = 30;

function salaryPlot(profession: Profession) {
  console.log("Plotting profession", profession);
  if (profession.type == "ACADEMIC") {
    const {years, fees} = profession.tuition;
    return [
      ...Array(years+1).fill(0).map((_, index) => -index * fees / years),
      ...Array(YEARS-years).fill(0).map((_, index) => (index+1) * profession.estimatedSalary.median - fees)
    ];
  } else {
    const {years, income} = profession.apprenticeship;
    return [
      ...Array(years+1).fill(0).map((_, index) => index * income),
      ...Array(YEARS-years).fill(0).map((_, index) => (index+1) * profession.estimatedSalary.median + income * years)
    ];
  }
}

const labels = Array(YEARS+1).fill(0).map((_, index) => index);


const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  animation: false,
  plugins: {
    colors: {enabled: true, forceOverride: true},
    legend: {position: "bottom"}
  },
  scales: {
    x: {
      type: "linear",
      title: {
        text: "Years in profession",
        display: true
      }
    },
    y: {
      type: "linear",
      title: {
        text: "Cumulative salary",
        display: true
      },
      ticks: {
          callback: (value: any, index: any, ticks: any) => '$' + Intl.NumberFormat().format(value)
      }
    }
  }
};


let chartData: Ref<ChartData<"line">> = computed(() => ({
    labels: labels,
    datasets: value.value.map(v => ({
      label: v.name,
      data: salaryPlot(v),
      // fill: false,
      // borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }))
}));
</script>


<template>
  <main>
    <h1>Career salary estimator</h1>

    <div id="chart">
      <Line
        :options="chartOptions"
        :data="chartData" />
    </div>

    <multiselect
      v-model="value"
      :options="options"
      :searchable="false"
      :close-on-select="true"
      :show-labels="true"
      :multiple="true"
      :taggable="false"
      label="name"
      track-by="name"
      group-values="professions"
      group-label="type"
      :group-select="false"
      placeholder="Pick a profession">
    </multiselect>
    
    <div>
      <div class="profession-grid" v-show="value.length > 0" style="font-weight: normal;">
        <div>Profession</div>
        <div>Median salary</div>
        <div>Training</div>
        <!-- <div>Actions</div> -->
      </div>

      <div v-for="(plot, index) in value">
        <ProfessionPlot :profession="plot" v-model="value[index]">
        </ProfessionPlot>
      </div>
    </div>

    <!-- <div v-if="value">
      <pre>{{ value }}</pre>
    </div> -->
    <!-- <p v-else>No option selected.</p> -->
  </main>
</template>

<style scoped>
/* #chart {
  height: 500px;
} */
</style>