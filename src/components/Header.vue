<template>
   <section class="header">
      <div class="header-box">
         <i class="fa fa-search"></i>
      </div>
      <div class="header-box relative">
         <i class="fas fa-shopping-cart"></i>
         <span class="notif" >{{ amountOfCart }}</span>
      </div>
   </section>
</template>

<style>
   
   .header {
      @apply w-full px-7 py-3 flex justify-between;
   }
   
   .header .header-box i {
      @apply duration-300 text-2xl text-gray-400;
      animation: slide-from-left .3s forwards; 
   }
   
   .header-box .notif {
      @apply absolute -top-2 -right-3 block rounded-full py-1 px-2 text-xs text-gray-50 bg-yellow-600 flex justify-center items-center;
      animation: slide-from-left .3s forwards;
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
   
   import { defineProps } from 'vue'
   
   defineProps({
      amountOfCart : {
         type: Number,
         default: 0
      }
   })
   
</script>