<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  categories: Array,
  modelValue: String,
  placeholder: String,
});

const emit = defineEmits(['update:modelValue']);

const internalSelectedCategory = ref(props.modelValue);

const updateCategory = () => {
  emit('update:modelValue', internalSelectedCategory.value);
};
watch(
  () => props.modelValue,
  (newValue) => {
    internalSelectedCategory.value = newValue;
  }
);
</script>

<template>
  <div class="clients-function__category">
    <select v-model="internalSelectedCategory" @change="updateCategory">
      <option value="">{{ placeholder }}</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
@import 'clients-style';
</style>
