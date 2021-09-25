<template>
   <component v-on:change-tab-to-details="currentTab = Details" v-on:change-tab-to-home="currentTab = Home" :is="currentTab" ></component>
</template>

<script setup>
   
   import Home from './views/Home.vue'
   import Details from './views/Details.vue'
   import { ref } from 'vue'
   
   const currentTab = ref(Home)
   const change = tab => {
      if ( tab === 'home' ) currentTab.value = Home
      else currentTab.value = Details
   }
   
</script>