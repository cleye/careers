<script setup lang="ts">
import { ref } from 'vue'
import { PROFESSIONS } from '../salaries';
import { type Profession } from '../salaries';
import Multiselect from 'vue-multiselect';

let value = ref("");
const selectedOption = ref('');
let options = ref(PROFESSIONS);//.map(p=>p.name));

const customLabel = (p: Profession) => p.name;
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

    <div v-if="value">
      <pre>{{ value }}</pre>
    </div>
    <p v-else>No option selected.</p>
  </main>
</template>

<!-- <style src="vue-multiselect/dist/vue-multiselect.min.css"></style> -->
