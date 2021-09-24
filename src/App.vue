<template>
   <component :is="currentTab" ></component>
   <NavBar></NavBar>
</template>

<script setup>
   
   import Home from './views/Home.vue'
   import NavBar from './components/NavBar.vue'
   import { reactive } from 'vue'
   
   const currentTab = reactive(Home)
   
</script>