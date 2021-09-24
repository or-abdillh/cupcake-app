<template>
   <section class="mb-5">
      <Header :amount-of-cart="amountsOfCart" ></Header>
      <Category></Category>
      <section class="px-7 mb-3">
         <p class="font-medium text-gray-400" >lorem ipsum sit amet dolor is text dummy sit amet dolor is text dummy for create a simple ipsum</p>
      </section>
      <Card v-on:addToCart="amountsOfCart++" ></Card>
   </section>
</template>

<style>
   
</style>

<script setup >
   
   import { ref } from 'vue'
   import Header from '../components/Header.vue'
   import Category from '../components/Category.vue'
   import Card from '../components/Card.vue'
   
   const amountsOfCart = ref(0)
   
</script>