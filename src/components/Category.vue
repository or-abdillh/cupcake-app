<template>
   <section class="category">
      <div>
         <strong class="text-gray-400" >TODAY</strong>
      </div>
      <div class="category-item">
         <template v-for="(item, index) in categoryItems" :key="index">
            <h1  @click="currentCategory = item" :class="currentCategory === item ? 'active' : ''" >{{ item }}</h1>
         </template>
      </div>
   </section>   
</template>

<style>
   
   .category {
      @apply w-full px-7 py-3;
   }
   
   .category .category-item {
      @apply flex justify-between mt-2 text-gray-400;
   }
   
   .category .category-item h1 {
      @apply text-3xl font-semibold duration-300;
   }
   
   .active {
      @apply text-gray-800;
   }
</style>

<script setup>
   
   import { ref } from 'vue'
   
   const categoryItems = ['Recommended', 'New']
   const currentCategory = ref('Recommended')
   
</script>