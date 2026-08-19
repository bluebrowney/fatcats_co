<script setup>
const now = ref(new Date())
const currentYear = computed(() => now.value.getFullYear())
const currentMonth = computed(() => now.value.getMonth())
const currentDay = computed(() => now.value.getDate())

const startWeekday = computed(() => new Date(currentYear.value, currentMonth.value, 1).getDay())

const daysInMonth = computed(() => new Date(currentYear.value, currentMonth.value + 1, 0).getDate())
const daysInPrevMonth = computed(() => new Date(currentYear.value, currentMonth.value, 0).getDate())


const movePrevMonth = () => {
  now.value = new Date(currentYear.value, currentMonth.value - 1, 1)
}

const moveNextMonth = () => {
  now.value = new Date(currentYear.value, currentMonth.value + 1, 1)
} 
</script>

<template>
  <div ></div>
  <CalendarBar 
    @prev-month="movePrevMonth"  
    @next-month="moveNextMonth"
    :month="currentMonth"
    :day="currentDay"
    :year="currentYear"
  />
  <CalendarMonthView
    :start-weekday="startWeekday"
    :days-in-month="daysInMonth"
    :days-in-prev-month="daysInPrevMonth"
    />
</template>
