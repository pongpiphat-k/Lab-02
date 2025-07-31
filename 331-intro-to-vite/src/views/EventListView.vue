<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import EventDetailsCard from '../components/EventDetailsCard.vue';
import EventService from '../services/EventService';
import { type Event } from '../types';
import { ref, onMounted, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const page = computed(() => Number(route.query.page) || 1)
const size = computed(() => Number(route.query.size) || 2)

const hasNexPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2);
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(size.value, page.value)
      .then((response) => {
        events.value = response.data;
        
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error('There was an error!', error);
      })
     
  })
})

</script>

<template>
   <h1>Events For Good</h1>
  <div class="flex flex-col items-cent ">
    <div class="event-column">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    
    <div class="event-column">
      <EventDetailsCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  
  </div>
    <div class ="pagination">
<RouterLink id="page-prev" :to="{ name: 'event-list-view', query: { page: page - 1, size: size } }"
  rel="prev" v-if ="page != 1" 
  >&#60; Prev page</RouterLink>

   <RouterLink id="page-next" :to="{ name: 'event-list-view', query: { page: page + 1 , size: size } }"
  rel="next" v-if="hasNexPage">
  Next page &#62;</RouterLink>
  </div>
  

</template>

<style scoped>
.event-column {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
.pagination {
  display: flex; 
  justify-content: center; 
  width: 290px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px; 
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>