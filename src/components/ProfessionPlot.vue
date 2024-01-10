<template>
  <div class="profession-grid">
    <div>
      {{ props.profession!.name }}
    </div>
    <!-- <div>
      {{ props.profession!.description }}
    </div> -->
    <div>
      ${{ Intl.NumberFormat().format(props.profession!.estimatedSalary.median) }}
    </div>
    <div v-if="model!.type == 'ACADEMIC'">
      Tuition fees: $<input type="number" class="dollars" v-model="model!.tuition.fees" />
      over <input type="number" class="years" v-model="model!.tuition.years" /> years
    </div>
    <div v-else>
      Apprentice wages: $<input type="number" class="dollars" v-model="model!.apprenticeship.income" />/year
      for <input type="number" class="years" v-model="model!.apprenticeship.years" /> years
    </div>
    <!-- <button>✕</button> -->
  </div>
</template>

<script setup lang="ts">
import { type Profession } from '@/salaries';
import type { PropType } from 'vue';

const model = defineModel<Profession>();
const props = defineProps({
  profession: Object as PropType<Profession>
})
</script>

<style scoped>
input {
  border: none;
  border-bottom: 1px solid black;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-align: center;
  margin: 0 3px;
}
input.years { width: 32px; }
input.dollars { width: 70px; }
</style>
