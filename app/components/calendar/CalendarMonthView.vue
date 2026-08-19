<script setup>

const props = defineProps([
  "startWeekday",
  "daysInMonth",
  "daysInPrevMonth",
])

</script>

<template>
  <div class="flex bg-white space-x-2 px-3">
    <div
      class="bg-gray-400 h-5 grow rounded-b-lg"
      v-for="x in 7"
      :key="x"></div>
  </div>
  <div class="grid grid-cols-7 grid-rows-6 bg-white p-3 gap-2 h-[30em] pb-[2em]">
    <CalendarDay 
      v-for="x in 42"
      :key="x"
      :dom="x - props.startWeekday > 0 && x - props.startWeekday <= props.daysInMonth ?
        x - props.startWeekday :
        x - props.startWeekday <= 0 ?  props.daysInPrevMonth + (x - props.startWeekday) : x - props.startWeekday - daysInMonth"
      :out-of-month="x-props.startWeekday <= 0 || x - props.startWeekday > props.daysInMonth"
    />
  </div>
</template>
