<template>
   <section class="card-wrapper">
      <template v-for="card in 3" :key="card">
         <template v-for="(img, index) in images" :key="index">
            <div class="card-layout">
               <div class="card-header">
                  <i @click="btnLove" class="far fa-heart text-pink-500 text-xl" ></i>
                  <img :src="img" class="mx-auto" width="130" :alt="img" />
                  <h1 @click="btnTitle()" class="font-medium duration-300 text-gray-700 card-title mt-3" >Bake a butter cake</h1>
                  <small class="font-medium text-gray-500" >$ 8.20</small>
               </div>
               <button @click="btnAddCart" type="button" class="card-footer">
                  <small class="font-medium block text-gray-50 duration-300" >Add to cart</small>
               </button>
            </div>
         </template>
      </template>
   </section>
</template>

<style scoped>
   
   .card-wrapper {
      @apply w-full px-7 py-4 mt-5 mb-10 flex overflow-scroll;
      font-family: 'Poppins', Sans-Serif;
      user-select: none;
   }
   
   .card-wrapper::-webkit-scrollbar {
      width: 0;
      display: none;
   }
   
   .card-wrapper .card-layout {
      @apply flex flex-wrap overflow-hidden mr-10 pt-3 duration-300 rounded-3xl bg-gray-50 shadow;
      min-width: 60%;
      animation: pop-up .55s ease forwards;
   }
   
   .card-wrapper .card-layout .card-header {
      @apply px-3 pt-4 mb-5;
   }
   
   .card-wrapper .card-layout .card-footer {
      @apply py-4 block w-full self-end flex justify-center items-center;
      background: #F96094;
   }
   
   .card-wrapper .card-layout .card-footer:active small {
      letter-spacing: 1.5px;
   }
   
   .card-wrapper .card-header img {
      animation: slide .65s ease-in-out forwards;
   }
   
   .fa-heart {
      animation: pop-up .3s ease-in-out forwards;
   }
   
   .card-title:active {
      @apply text-pink-400;
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
         transform: translateY(-40%) scale(.75);
         opacity: .85;
      } to {
         transform: translateY(0) scale(1);
         opacity: 1;
      }
   }
   
</style>

<script setup>
   
   import { defineEmits } from 'vue'
   const images = ['cupcake-1.png', 'cupcake-2.png', 'cupcake-3.png']
   
   //Handler for event button love click
   const btnLove = e => {
      const target = e.target.classList;
      if ( target.contains('far') ) {
         target.replace('far', 'fas')
      } else {
         target.replace('fas', 'far')
      }
   }
   
   //Handler for event button add cart click
   const emit = defineEmits(['addToCart', 'changeTab'])
   
   const btnAddCart = () => {
      emit('addToCart')
   }
   
   //Handler for tag title click 
   const btnTitle = () => {
      setTimeout( () => {
         emit('changeTab')
      }, 500)
   }
</script>