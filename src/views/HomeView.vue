<script setup lang="ts">
import { ref } from 'vue'
import { PROFESSIONS, type Profession, type EstimatedSalary } from '../salaries';
import Multiselect from 'vue-multiselect';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Ticks, Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale, type ChartData, type ChartOptions, type Point } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale);


let value = ref("");
const selectedOption = ref('');
let options = ref(PROFESSIONS);//.map(p=>p.name));

const customLabel = (p: Profession) => p.name;


const YEARS = 30;

function salaryPlot(profession: Profession) {
  return Array(YEARS+1).fill(0).map((_, index) => (index) * profession.estimatedSalary.median)
}

const labels = Array(YEARS+1).fill(0).map((_, index) => index);

const p: Profession = {
  "name": "Software Developer",
  "description": "Research, design, and develop computer and network software or specialized utility programs. Analyze user needs and develop software solutions, applying principles and techniques of computer science, engineering, and mathematical analysis. Update software or enhance existing software capabilities. May work with computer hardware engineers to integrate hardware and software systems, and develop specifications and performance requirements. May maintain databases within an application area, working individually or coordinating database development as part of a team.\n\n",
  "estimatedSalary": {
      "percentile10": 80000,
      "percentile25": 95000,
      "median": 113410,
      "percentile75": 133954.7,
      "percentile90": 160425
    },
  "lastReviewed": "2024-01-03T04:50:17-05:00"
};



const chartOptions: ChartOptions<"line"> = {
  responsive: true,
  animation: false,
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
          callback: (value: any, index: any, ticks: any) => '$' + Intl.NumberFormat().format(value) // Ticks.formatters.numeric.apply(this, [value, index, ticks])
      }
    }
  }
};

const chartData = {
    labels: labels,
    datasets: [{
      label: p.name,
      data: salaryPlot(p),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
};


</script>


<template>
  <main>
    <h1>Select a career</h1>

    <multiselect
      v-model="value"
      :options="options"
      :searchable="false"
      :close-on-select="true"
      :show-labels="true"
      :multiple="true"
      :custom-label="customLabel"
      placeholder="Pick a career"></multiselect>

    <!-- <select v-model="selectedOption">
      <option v-for="(profession, index) in PROFESSIONS" :key="index" :value="profession">
        {{ profession.name }}
      </option>
    </select> -->

    <Line
      :options="chartOptions"
      :data="chartData" />

    <div v-if="value">
      <pre>{{ value }}</pre>
    </div>
    <p v-else>No option selected.</p>
  </main>
</template>

<!-- <style src="vue-multiselect/dist/vue-multiselect.min.css"></style> -->
