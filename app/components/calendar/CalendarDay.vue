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
    ]">
    <span class="bg-gray-400 rounded-full py-[1px] px-[5px] absolute top-1 left-1 text-[0.65em] text-source">{{props.dom}}</span>
  </div>
</template>
