<template>
  <h1>Student List</h1>
  <div class="flex justify-center gap-[20px]">
    <div class="flex flex-col items-center">
      <StudentCard v-for="student in students" :key="student.id" :student="student" />
    </div>
  </div>
</template>

<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue';
import StudentService from '../services/StudentCard';
import { ref, onMounted } from 'vue';
import { type Student } from '../types';

const students = ref<Student[] | null>(null);

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data;
    })
    .catch((error) => {
      console.error('There was an error fetching student data!', error);
    });
});
</script>

<!-- <style scoped>
/* .students-container {
  display: flex; 
  justify-content: center; 
  gap: 20px; 
} */

.student-column {
  display: flex;
  flex-direction: column;
  align-items: center; 
}
</style> -->