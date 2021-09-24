<template>
   <section class="card-wrapper">
      <template v-for="(img, index) in images" :key="index">
         <div class="card-layout">
            <div class="card-header">
               <img :src="img" class="mx-auto" width="120" :alt="img" />
               <h1 class="font-medium mt-3" >Bake a butter cake</h1>
               <small class="font-medium text-gray-500" >$ 8.20</small>
            </div>
            <div class="card-footer">
               <small>Add to cart</small>
            </div>
         </div>
      </template>
   </section>
</template>

<style scoped>
   
   .card-wrapper {
      @apply w-full px-7 py-3 flex overflow-scroll;
      font-family: 'Poppins', Sans-Serif;
   }
   
   .card-wrapper::-webkit-scrollbar {
      width: 0;
      display: none;
   }
   
   .card-wrapper .card-layout {
      @apply mr-4 duration-300 overflow-hidden rounded-3xl bg-gray-50 shadow;
      min-width: 60%;
      animation: pop-up .3s ease forwards;
   }
   
   .card-wrapper .card-layout .card-header {
      @apply px-3 pt-4 mb-5;
   }
   
   .card-wrapper .card-layout .card-footer {
      @apply p-3 h-full  w-full text-center font-medium text-gray-50;
      background: #F96094;
   }
   
   .card-wrapper .card-header img {
      animation: slide .65s ease-in-out forwards;
   }
   
   .card-wrapper .card-header img:hover {
      transform: translateY(35%);
   }
   
   @keyframes slide {
      from {
         transform: translate(30%, 20%) scale(.75) rotate(-15deg);
      } to {
         transform: translate(0) scale(1) rotate(0deg);
      }
   }
   
   
   @keyframes pop-up {
      from {
         transform: scale(.75);
         opacity: .85;
      } to {
         transform:  scale(1);
         opacity: 1;
      }
   }
</style>

<script setup>
   
   const images = ['cupcake-1.png', 'cupcake-2.png', 'cupcake-3.png']
   
</script>