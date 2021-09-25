<template>
   <section class="header">
      <div class="header-box">
         <i @click="btnBack()" class="fas fa-chevron-left duration-300"></i>
      </div>
      <div class="header-box">
         <i class="fas fa-archive"></i>
      </div>
   </section>
</template>

<style>
   
   .header {
      @apply w-full px-7 pt-5 pb-3 flex justify-between;
   }
   
   .header .header-box i {
      @apply duration-300 text-2xl text-gray-400;
   }
   
   .fa-chevron-left:active {
      transform: scale(1.5);   
   }
   
</style>

<script setup >
   
   import { defineEmits } from 'vue'
   
   const emit = defineEmits(['changeTab'])
   
   const btnBack = () => {
      setTimeout( () => {
         emit('changeTab')
      }, 5)
   }
   
</script>