<template>
   <section class="category">
      <div>
         <strong class="text-gray-400" >TODAY</strong>
      </div>
      <div class="category-item">
         <template v-for="(item, index) in categoryItems" :key="index">
            <div :class="currentCategory === item ? 'active' : ''" class="item-wrapper">
               <h1  @click="currentCategory = item" >{{ item }}</h1>
               <span class="indicator" ></span>
            </div>
         </template>
      </div>
   </section>   
</template>

<style>
   
   .category {
      @apply w-full px-7 mt-5;
      user-select: none;
   }
   
   .category .category-item {
      @apply flex justify-between text-gray-400;
   }
   
   .category .category-item h1 {
      @apply text-3xl font-semibold duration-300;
   }
   
   .category .category-item .indicator {
      @apply inline-block duration-300 p-2 rounded-full mt-7 mb-2;
   }
   
   .active h1 {
      @apply text-gray-800;
   }
   
   .active .indicator {
      @apply bg-green-500;
   }
   
</style>

<script setup>
   
   import { ref } from 'vue'
   
   const categoryItems = ['Recommended', 'New']
   const currentCategory = ref('Recommended')
   
</script>