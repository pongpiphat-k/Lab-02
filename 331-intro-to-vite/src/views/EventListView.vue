<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import EventDetailsCard from '../components/EventDetailsCard.vue';
import EventService from '../services/EventService';
import { type Event } from '../types';
import { ref, onMounted, computed, watchEffect } from 'vue';

const events = ref<Event[] | null>(null)

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const page = computed(() => props.page)

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(2, page.value)
      .then((response) => {
        events.value = response.data;
      })
      .catch((error) => {
        console.error('There was an error!', error);
      })
  })
})

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
  <RouterLink :to="{ name: 'event-list-view', query: { page: page - 1}}"
  rel="prev" v-if ="page != 1" 
  >Prev page /</RouterLink>

  <RouterLink :to="{ name: 'event-list-view', query: { page: page + 1}}"
  rel="next">
   Next page</RouterLink>
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