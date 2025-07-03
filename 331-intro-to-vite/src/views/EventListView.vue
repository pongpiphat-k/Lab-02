<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import EventDetailsCard from '../components/EventDetailsCard.vue';
import type { Event } from '../types';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const events = ref<Event[]>(null)

onMounted(() => {
  axios
    .get('https://my-json-server.typicode.com/pongpiphat-k/Lab-02/db')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
});

</script>

<template>
   <h1>Events For Good</h1>
    <!-- new element -->
  <div class="events-container">
    <div class="event-column">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    <div class="event-column">
      <EventDetailsCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<style scoped>
.events-container {
  display: flex; 
  justify-content: center; 
  gap: 20px; 
}

.event-column {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
</style>