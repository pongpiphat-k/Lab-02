<script setup lang="ts">
import { RouterLink, RouterView,useRouter } from 'vue-router'
import { ref, watch } from 'vue';
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'


const store = useMessageStore()
const { message } = storeToRefs(store)
const pageSize = ref(2); // Default page size
const router = useRouter();

watch(pageSize, (newSize) => {
  router.push({ name: 'event-list-view', query: { size: newSize } });
});
</script>

<template>
  <div class="text-center front-sans text-gray-700 antialias">
    <header>
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h1>Deploy with Vercel</h1>
      <div class="wapper">
        <nav class="py-6 p-[50px] font-bold text-gray-500">
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view', query: {size: pageSize } }">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'student-list-view' }">Students</RouterLink> |
           <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink>
        </nav>
        <label for="page-size">Events per page: </label>
        <select id="page-size" v-model="pageSize">
          <option v-for="size in [2,3,4,5,6]" :key="size" :value="size">{{ size }}</option>
          <option value="all">All</option>
        </select>
      </div>
    </header>
   
      <RouterView />
  </div>
</template>

