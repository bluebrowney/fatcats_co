<script setup>
const props = defineProps([
            "iname",
            "ipsrc",
            "isrc",
            "ipdesc",
            "idesc",
            "icals",
            "iprice"
])

</script>

<template>
  <div class="h-[15em] w-[250px] bg-blue-200 p-4 rounded-md flex-shrink-0 flex flex-col justify-between items-center">
    <h2>{{ props.iname }}</h2>
    <img 
      v-if="props.ipsrc"
      :src="props.ipsrc" 
      class="rounded-md border-2 border-sky-500"
    >
    <p class="text-sm">{{props.ipdesc ? props.ipdesc : ""}}</p>
    <div class="flex justify-between w-full">
      <span v-if="props.icals" class="font-source font-bold text-blue-400">{{props.icals}}<span class="text-sm">CALS</span></span>
      <span v-if="props.iprice" class="font-source font-bold text-blue-400">${{props.iprice.toFixed(2) }}</span>
    </div>
  </div>
</template>
