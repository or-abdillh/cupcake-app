<template>
   <section class="details">
      <HeaderDetail v-on:change-tab="changeTab()" ></HeaderDetail>
      <div>
         <section class="px-7">
            <strong class="sub-title" >CUPCAKES</strong>
            <h1 class="main-title" >Baked Berry</h1>
         </section>
         <section class="px-7 mt-10">
            <strong class="sub-title" >PRICE</strong>
            <h1 class="main-title" >$ 8.20</h1>
         </section>
      </div>
      <CardDetail></CardDetail>
   </section>
</template>

<style>
   
   .details {
      @apply flex flex-wrap min-h-screen;
      font-family: 'Poppins', Sans-Serif;
      min-height: 100vh;
   }
   
   .sub-title {
      @apply font-medium text-gray-400;
   }
   
   .main-title {
      @apply font-medium text-gray-800 text-2xl;
   }
   
</style>

<script setup>
   
   import { defineEmits } from 'vue'
   import HeaderDetail from '../components/HeaderDetail.vue'
   import CardDetail from '../components/CardDetail.vue'
   
   const emit = defineEmits(['changeTabToHome'])
   const changeTab = () => {
      emit('changeTabToHome')
   }
   
</script>