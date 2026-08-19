<script setup>
const props = defineProps(['month', 'day', 'year'])
const emit = defineEmits(["prev-month", "next-month"])
</script>

<template>
  <div class="flex bg-gray-200 flex-col">
    <div class="flex justify-between items-center w-full p-3 text-3xl font-source">
      <div class="text-gray-800"><span class="text-5xl font-bold text-black">{{props.month + 1 < 10 ? `0${props.month + 1}` :  props.month + 1}}</span> {{props.day < 10 ? `0${props.day}` : props.day}}</div>
      <div class="text-gray-400">{{props.year}}</div>
    </div>
    <div class="flex justify-between w-full pb-3 px-3">
      <div class="h-10 w-10 bg-blue-200 text-center rounded-xl"
           @click="emit('prev-month')"><</div>
      <div class="h-10 w-10 bg-blue-200 text-center rounded-lg"
           @click="emit('next-month')">></div>
    </div>
  </div>
</template>
