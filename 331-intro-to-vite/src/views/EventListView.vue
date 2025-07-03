<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import EventDetailsCard from '../components/EventDetailsCard.vue';
import EventService from '../services/EventService';
import { Event } from '../types';
import { ref, onMounted } from 'vue';

const events = ref<Event[]>(null)

onMounted(() => {
  EventService.getEvents() 
    .then((response) => {
      events.value = response.data.events;
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