<template>
   <section class="nav-bar">
      <template v-for="(item , index) in navItems" :kkey="index">
         <div @click="currentNav = item" :class="currentNav === item ? 'active' : ''" class="nav-box">
            <i class="duration-300" :class="item" ></i>
         </div>
      </template>
   </section>
</template>

<style>
   
   .nav-bar {
      @apply w-full fixed bottom-0 py-3 flex justify-around items-center;
      background: #31353A;
   }
   
   .nav-bar .nav-box {
      @apply text-gray-400;
   }
   
   .nav-bar .active i {
      @apply text-gray-100 text-2xl;
   }
</style>

<script setup>
   
   import { ref } from 'vue'
   
   const navItems = ['fa fa-home', 'far fa-compass', 'fa fa-user']
   const currentNav = ref('far fa-compass')
   
</script>