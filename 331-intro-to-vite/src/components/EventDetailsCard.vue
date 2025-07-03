<script setup lang="ts">
import type { Event } from '../types';

defineProps<{
  event: Event;
}>();
</script>

<template>
  <div class="event-details-card">
    <p class="detail-text">Category: {{ event.category }}</p>
    <p class="detail-text">Organizer: {{ event.organizer }}</p>
  </div>
</template>

<style scoped>
.event-details-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39496c;
  margin-bottom: 18px;
  text-align: right; 
}

.detail-text {
  font-size: 16px;
}
</style>