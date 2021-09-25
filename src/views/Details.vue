<template>
   <section class="min-h-screen">
      <HeaderDetail v-on:change-tab="changeTab()" ></HeaderDetail>
   </section>
</template>

<script setup>
   
   import { defineEmits } from 'vue'
   import HeaderDetail from '../components/HeaderDetail.vue'
   
   const emit = defineEmits(['changeTabToHome'])
   const changeTab = () => {
      emit('changeTabToHome')
   }
   
</script>