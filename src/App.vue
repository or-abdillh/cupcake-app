<template>
   <Alert v-if="!isMobile"></Alert>
   <component v-if="isMobile" v-on:change-tab-to-details="currentTab = Details" v-on:change-tab-to-home="currentTab = Home" :is="currentTab" ></component>
</template>

<script setup>
   
   import Home from './views/Home.vue'
   import Details from './views/Details.vue'
   import Alert from './components/Alert.vue'
   import { ref, computed, onMounted, watch } from 'vue'
   
   const currentTab = ref(Home)
   const change = tab => {
      if ( tab === 'home' ) currentTab.value = Home
      else currentTab.value = Details
   }
   
   //Get the current viewport width
   const viewPort = ref(window.innerWidth)
   
   //Hidden root if viewPort more bigger than 464
   const isMobile = ref(false)
   
   //Checking viewport at onMounted
   onMounted(() => {
      if ( viewPort.value > 464 ) isMobile.value = false
      else isMobile.value = true
   })
   
   //Checking viewPort at resize browser
   watch(viewPort, value => {
      if ( value > 464 ) isMobile.value = false
      else isMobile.value = true
   })
   
</script>