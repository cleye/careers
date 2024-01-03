<script setup lang="ts">
import Multiselect from 'vue-multiselect';
import { ref } from 'vue'
import { PROFESSIONS } from '../salaries';

let value = ref("");
let options = ref(['list', 'of', 'options']);
</script>

<template>
  <main>
    <h1>Select a career</h1>
    <select v-model="value">
      <option v-for="(profession, index) in PROFESSIONS" :key="index" :value="profession.name">
        {{ profession.name }}
      </option>
    </select>
  </main>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
