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
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wapper">
        <nav>
          <RouterLink :to="{ name: 'event-list-view', query: {size: pageSize } }">Event</RouterLink> |
          <RouterLink :to="{ name: 'student-list-view' }">Students</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
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

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
  color:#2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}

@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation: yellofade 3s ease-in-out;
}
</style>
