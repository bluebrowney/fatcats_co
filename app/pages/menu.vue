<script setup>

const sections = [{ title: "Specialties", notes: "Make It Catnip Style: Our Signatures with Matacha Instead"}, {title:"Coffee"}, {title:"Tea"}, {title:"Syrups"}, {title:"Milks & Addons"}]

</script>

<template>
  <MenuBar :sections="sections"/>
  <template v-for="section in sections" :key="section.title">
    <MenuSection :stitle="section.title">
      <template v-slot:default>
        <MenuItem v-for="item in 10"/>
      </template>
      <template v-slot:notes>
        <p v-if="section.notes" class="text-sm">
          {{section.notes}}
        </p>
      </template>
    </MenuSection>
  </template>
  <MenuModal/>
</template>
