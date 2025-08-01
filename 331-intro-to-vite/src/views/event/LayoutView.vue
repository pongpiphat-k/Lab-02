<script setup lang="ts">

import { RouterLink, RouterView,useRouter } from 'vue-router'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore()
const { event } = storeToRefs(store)

</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
        <Router-link exact-active-class="text-green-500" :to="{ name: 'event-detail-view'}">Details 
        </Router-link>  | 
        <Router-link exact-active-class="text-green-500" :to="{ name: 'event-register-view'}">Register
        </Router-link> |
        <Router-link exact-active-class="text-green-500" :to="{ name: 'event-edit-view'}">Edit</Router-link>
    </nav>
    <RouterView :event="event" />
    </div>
  </template>
  
