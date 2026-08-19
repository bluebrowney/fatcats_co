<script setup>
const props = defineProps(['sections'])
</script>

<template>
  <div class="flex p-3 pt-7 space-x-3 justify-between bg-gray-200 -translate-y-3 z-10 relative overflow-x-scroll scrollbar-none sticky top-[5em] select-none">
    <a 
      v-for="section in props.sections"
      class="text-lg underline bg-white p-2 whitespace-nowrap rounded-md border-2 border-green-900"
      :href="`#${section.title.toLowerCase()}`"
    >{{section.title}}</a>
  </div>
</template>
