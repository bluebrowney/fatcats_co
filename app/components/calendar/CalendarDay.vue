<script setup>
const props = defineProps([
"dom",
"outOfMonth",
"popUp"])
</script>

<template>
  <div :class="[
      'h-full',
      'w-full',
      'bg-gray-300',
      props.outOfMonth ? 'opacity-50' : 'opacity-100',
      'rounded-xl',
      'relative',
      !props.outOfMonth ? 'hover:shadow-md': '',
      !props.outOfMonth ? 'hover:-translate-y-1': '',
      !props.outOfMonth ? 'hover:border-b-2': '',
      !props.outOfMonth ? 'hover:border-gray-600': '',
      'transition-all'
    ]">
    <span class="bg-gray-400 rounded-full py-[1px] px-[5px] absolute top-1 left-1 text-[0.65em] text-source">{{props.dom}}</span>
  </div>
</template>
