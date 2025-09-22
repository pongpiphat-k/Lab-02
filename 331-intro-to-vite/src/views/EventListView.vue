<script setup lang="ts">
import EventCard from '../components/EventCard.vue';
import EventDetailsCard from '../components/EventDetailsCard.vue';
import EventService from '../services/EventService';
import { type Event } from '../types';
import { ref, onMounted, computed, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BaseInput from '@/components/BaseInput.vue';

const route = useRoute();
const router = useRouter();
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

const keyword = ref('')
  function updateKeyword() {
  let queryFunction;
  if (keyword.value === '') {
    queryFunction = EventService.getEvents(3, page.value)
  } else {
    queryFunction = EventService.getEventByKeyword(keyword.value, 3, page.value)
  }

  queryFunction
    .then((response: import('axios').AxiosResponse<Event[]>) => {
      events.value = response.data
      console.log('events', events.value)

      totalEvents.value = Number(response.headers['x-total-count'])
      console.log('totalEvent', totalEvents.value)
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
}

</script>

<template>
   <h1>Events For Good</h1>
  <div class="flex flex-col items-center ">
    <div class="w-64">
      <BaseInput v-model="keyword" label="Search..." class="w-full" @input="updateKeyword"/>
      <p>test</p>
    </div>
    <div class="flex flex-col items-center">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    
    <div class="flex flex-col items-center">
      <EventDetailsCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  
  </div>
    <div class ="flex justify-center w-[290px] ml-auto mr-auto mt-[30px]">
      <div class="text-left w-full">
        <RouterLink :to="{ name: 'event-list-view', query: { page: page - 1, size: size } }"
  rel="prev" v-if ="page != 1" 
  >&#60; Prev page</RouterLink>
      </div>

      <div class="text-right w-full"> 
        <RouterLink :to="{ name: 'event-list-view', query: { page: page + 1 , size: size } }"
  rel="next" v-if="hasNexPage">
  Next page &#62;</RouterLink>
      </div>
   
  </div>
  

</template>

<style scoped>
/* .event-column {
  display: flex;
  flex-direction: column;
  align-items: center; 
} */

/* .pagination {
  display: flex; 
  justify-content: center; 
  width: 290px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px; 
} */
 


</style>