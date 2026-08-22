<script setup>

const sections = [
  { 
    title: "Signatures",
    notes: "Make It Catnip Style: Our Signatures with Matacha Instead",
    category: "signatures"
  }, 
  {
    title:"Coffee",
    category: "coffee"
  },
  {
    title:"Tea",
    category: "tea"
  },
  {
    title:"Syrups",
    category: "available_syrups"
  },
  {
    title:"Milks & Addons",
    category: "milk_&_add_ons"
  }
]

const { data: menuItems } = await useFetch('/api/menuitems')
console.log(menuItems.value)
</script>

<template>
  <MenuBar :sections="sections"/>
  <template v-for="section in sections" :key="section.title">
    <MenuSection :stitle="section.title">
      <template v-slot:default>
        <MenuItem 
          v-for="item in menuItems?.filter((menuItem) => menuItem.category == section.category)"
          :iname="item.name"
          :ipdesc="item.pdesc"
          :idesc="item.desc"
          :ipsrc="item.psrc"
          :isrc="item.src"
          :icals="item.cals"
          :iprice="item.price"
          />
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
