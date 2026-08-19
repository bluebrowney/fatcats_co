<script setup>
const props = defineProps(["stitle"])
</script>

<template>
  <div class="bg-white rounded-l-2xl p-3 my-5 ml-2 text-2xl scroll-mt-[10rem]" :id="props.stitle.toLowerCase()">
    <span class="inline-block">
      {{props.stitle}} <br>
      <div class="h-1 w-full bg-black rounded-full -translate-y-1 "></div>
    </span>
    <div class="flex space-x-6 p-3 jusitfy-start overflow-x-scroll scrollbar-none">
      <slot name="default"/>
    </div>
      <slot name="notes"/>
  </div>
</template>
