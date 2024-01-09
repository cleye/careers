<template>
  <div class="item">
    <div>
      {{ props.profession!.name }}
    </div>
    <div>
      {{ props.profession!.description }}
    </div>
    <div>
      Median salary is 
      ${{ props.profession!.estimatedSalary.median }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Profession } from '@/salaries';
import type { PropType } from 'vue';

const props = defineProps({
  profession: Object as PropType<Profession>
})
</script>

<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
</style>
