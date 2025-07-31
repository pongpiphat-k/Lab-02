<script setup lang="ts">

import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore()
const { event } = storeToRefs(store)

</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
        <Router-link :to="{ name: 'event-detail-view'}">Details 
        </Router-link>  | 
        <Router-link :to="{ name: 'event-register-view'}">Register
        </Router-link> |
        <Router-link :to="{ name: 'event-edit-view'}">Edit</Router-link>
    </nav>
    <RouterView :event="event" />
    </div>
  </template>
  
