<template>
   <section class="nav-bar">
      <template v-for="(item , index) in navItems" :kkey="index">
         <div @click="currentNav = item" :class="currentNav === item ? 'active' : ''" class="nav-box">
            <i class="duration-300 text-3xl" :class="item" ></i>
         </div>
      </template>
   </section>
</template>

<style>
   
   .nav-bar {
      @apply absolute bottom-0 w-full py-4 px-7 flex justify-between items-center;
      background: #31353A;
   }
   
   .nav-bar .nav-box {
      @apply text-gray-400;
   }
   
   .nav-bar .active i {
      @apply text-gray-100;
   }
</style>

<script setup>
   
   import { ref } from 'vue'
   
   const navItems = ['fa fa-home', 'far fa-compass', 'fa fa-user']
   const currentNav = ref('far fa-compass')
   
</script>