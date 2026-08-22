<script setup>
const route = useRoute()

const isNavigating = ref(false)

watch(() => route.path, async (newPath) => {
  isNavigating.value = true

  if (newPath !== "/") {
    isScrolled.value = false
  } else {
    isScrolled.value = window.scrollY > 7 * 16
  }

  await nextTick()
  setTimeout(() => {
    isNavigating.value = false
  }, 50)
})

const titleText = computed(() => {
  if (route.path === "/") return "Fat Cats"
  else if (route.path === "/menu") {
      return "Menu"
  }
  else if (route.path === "/calendar") {
    
    return "Calendar"
  }
})

const isScrolled = ref(false)

const isHomepage = computed(() => route.path == "/")

const handleScroll = () => {
  if(isHomepage.value) {
    isScrolled.value = window.scrollY > 7 * 16
  }
}


onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div :class="[
     isHomepage ? 'h-[12em]' : 'h-[5em]',
     'sticky',
     'top-0',
     'z-20',
    ]">
    <div :class="[
      isScrolled || !isHomepage ? 'h-[5em]' : 'h-[12em]',
      isScrolled || !isHomepage ? 'bg-white' : 'bg-blue-300',
      isScrolled || !isHomepage ? 'translate-y-0' : '-translate-y-8',
      isScrolled || !isHomepage ? 'rounded-b-xl' : 'rounded-none',
      isScrolled || !isHomepage ? 'shadow-lg' : '',
      'text-center',
      'flex',
      'relative',
      'justify-between',
      'items-center',
      'p-5',
      'transition-all',
     isHomepage && !isNavigating ? 'duration-500' : 'duration-0',
      'ease-out',
    ]">
      <NuxtLink 
        :class="[
         isScrolled || !isHomepage ? 'h-[50px]' : 'h-[75px]',
         isScrolled || !isHomepage ? 'w-[50px]' : 'w-[75px]',
         'bg-blue-500',
         'rounded-full',
         'z-10',
         'transition-all',
         'p-1', 
         isHomepage && !isNavigating ? 'duration-300' : 'duration-0'
        ]"
        to="/"
      ><img src="/icon.png"></NuxtLink>

      <div :class="[
         isScrolled || !isHomepage ? 'translate-y-0' : 'translate-y-20',
         'absolute',
         'w-full',
         'items-center',
         'top-0',
         'left-0',
         'h-full',
         'flex',
         'justify-center',
         'transition-all',
         isHomepage && !isNavigating ? 'duration-300' : 'duration-0'
        ]">
        <div class="flex items-center flex-col">
          <span :class="[
            isScrolled || !isHomepage ? 'text-[2rem]' : 'text-[4rem]',
            'leading-[0.9]',
            'whitespace-nowrap',
            'transition-all',
          isHomepage && !isNavigating ? 'duration-300' : 'duration-0'
          ]">{{titleText}}</span>
          <div class="h-1 w-[calc(100%-2.5rem)] bg-black rounded-md"> </div>
        </div>
      </div>



      <div :class="[
           isScrolled || !isHomepage ? 'h-[30px]' : 'h-[50px]',
           isScrolled || !isHomepage ? 'w-[30px]' : 'w-[50px]',
           'z-10',
           'transition-all',
          isHomepage && !isNavigating ? 'duration-200' : 'duration-0'
        ]"
   >
        <img src="/menu_button.svg">
      </div>
    </div>
  </div>
</template>
