<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import EventDetailsCard from '../components/EventDetailsCard.vue';
import type { Event } from '../types';
import { ref } from 'vue';

const events = ref<Event[]>([
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee'
  },
  {
    id: 4582797,
    category: 'Food',
    title: 'Community Gardening',
    description: 'Join us as we tend to the community edible plants.',
    location: 'Flora City',
    date: 'March 14, 2022',
    time: '10:00',
    petsAllowed: true,
    organizer: 'Fern Pollin'
  },
  {
    id: 8419988,
    category: 'sustainability',
    title: 'Beach Cleanup',
    description: 'Help pick up trash along the shore.',
    location: 'Playa Del Carmen',
    date: 'July 22, 2022',
    time: '11:00',
    petsAllowed: false,
    organizer: 'Carey Wales'
  }
]);
</script>

<template>
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
  display: flex; /* Use flexbox to arrange columns side-by-side */
  justify-content: center; /* Center the entire container */
  gap: 20px; /* Add some space between the columns */
}

.event-column {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items within each column */
}
</style>