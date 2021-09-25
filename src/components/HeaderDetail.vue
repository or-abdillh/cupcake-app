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
      @apply w-full px-7 py-3 flex justify-between;
   }
   
   .header .header-box i {
      @apply text-2xl text-gray-400;
      transition: .3s transform!important;
      animation: slide-from-left .3s forwards;
   }
   
   .fa-chevron-left:active {
      transform: scale(1.5)!important;   
   }
   
   @keyframes slide-from-left {
      from {
         transform: translateX(-25%) scale(.75) rotate(45deg);
      } to {
         transform: translateX(0) scale(1) rotate(0deg);
      }
   }
   
</style>

<script setup >
   
   import { defineEmits } from 'vue'
   
   const emit = defineEmits(['changeTab'])
   
   const btnBack = () => {
      setTimeout( () => {
         emit('changeTab')
      }, 500)
   }
   
</script>