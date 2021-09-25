<template>
   <section class="home">
      <Header :amount-of-cart="amountsOfCart" ></Header>
      <Category></Category>
      <section class="px-7 mb-5 mt-10">
         <p class="font-medium text-gray-400" >lorem ipsum sit amet dolor is text dummy sit amet dolor is text dummy for create a simple ipsum</p>
      </section>
      <Card v-on:change-tab="changeTab()" v-on:addToCart="amountsOfCart++" ></Card>
      <NavBar></NavBar>
   </section>
</template>

<style>
   
   .home {
      @apply min-h-screen relative;
   }
   
</style>

<script setup >
   
   import { ref, defineEmits } from 'vue'
   import Header from '../components/Header.vue'
   import Category from '../components/Category.vue'
   import Card from '../components/Card.vue'
   import NavBar from '../components/NavBar.vue'
   
   const amountsOfCart = ref(0)
   const emit = defineEmits(['changeTabToDetails'])
   const changeTab = () => {
      emit('changeTabToDetails')
   }
   
</script>