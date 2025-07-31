<script setup lang="ts">
import { type Event } from '../types';
defineProps<{
  event: Event;
}>();

</script>

<template>
  <RouterLink class="text-[#2c3e50]" :to="{ name: 'event-detail-view', params: { id: event.id} }">
  <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
    <h2 class="text-[20px]">{{ event.title }}</h2>
    <span>@{{ event.time }} on {{ event.date }}</span>
  </div>
  <!-- <div class="event-card">
    <h2>{{ event.category }}</h2>
    <h2>Organizer: {{ event.organizer }}</h2>
  </div> -->
  </RouterLink>
</template>

<style scoped>
/* .event-card {
 padding: 20px;
 width: 250px;
 cursor: pointer;
 border: 1px solid #39496c;
 margin-bottom: 18px;
} */

/* .event-link {
 text-decoration: none;
 color: #3474b4;

} */
</style> 
