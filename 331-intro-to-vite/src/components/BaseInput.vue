<!-- <template>
  <div>
    <label v-if="label" class="block mb-1 text-gray-700">{{ label }}</label>
    <input
      :value="modelValue"
      @input="onInput"
      :class="['border rounded px-3 py-2 w-full', customClass]"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ modelValue: string; label?: string; class?: string }>();
const emit = defineEmits(['update:modelValue']);
const customClass = props.class || '';

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style> -->

<script setup lang="ts">
const modelValue = defineModel()
interface BaseInputProps {
  label: string
}
const props = withDefaults(defineProps<BaseInputProps>(), {
  label: ' '
})
</script>
<template>
  <label v-if="label">
    {{ props.label }}
  </label>
  <inout class="mb-6" v-bind="$attrs" v-model="modelValue" :placeholder="label" />
</template>
