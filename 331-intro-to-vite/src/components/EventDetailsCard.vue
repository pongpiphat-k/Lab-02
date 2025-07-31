<script setup lang="ts">
import type { Event } from '../types';

defineProps<{
  event: Event;
}>();
</script>

<template>
  <div class="p-[20px] w-[250px] cursor-pointer border border-gray-600 mb-[18px] text-right hover:scale-101 hover:shadow-sp ">
    <p class="detail-text">Category: {{ event.category }}</p>
    <p class="detail-text">Organizer: {{ event.organizer }}</p>
  </div>
</template>

<style scoped>
/* .event-details-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39496c;
  margin-bottom: 18px;
  text-align: right; 
} */

/* .event-details-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
</style>