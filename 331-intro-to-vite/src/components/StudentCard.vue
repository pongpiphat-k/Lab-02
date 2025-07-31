<template>
  <div class="p-[20px] w-[250px] cursor-pointer border border-gray-600 mb-[18px] hover:scale-101 hover:shadow-sp">
    <h2>{{ student.name }} {{ student.surname }}</h2>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  student: {
    name: string;
    surname: string;
    gpa: number;
  };
}>();
</script>

<!-- <style scoped>
.student-card {
 padding: 20px;
 width: 250px;
 cursor: pointer;
 border: 1px solid #39496c;
 margin-bottom: 18px;
}
.student-card:hover {
 transform: scale(1.01);
 box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style> -->