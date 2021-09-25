<template>
   <section class="card-wrapper">
      <div class="card-detail-header">
         <img :src="store.state.imgPreview" class="img-preview" width="250" />
         <span class="badge">
            <i @click="badgeClick" class="far fa-heart text-xl text-gray-700" ></i>
         </span>
         <div class="box-qty">
            <strong class="font-medium text-gray-100 text-xl" >QTY</strong>
            <div class="qty-actions">
               <button :disabled="amountOfQty === 0" class="btn-actions" @click="amountOfQty--" type="button">
                  -
               </button>
               <span class="text-gray-100 font-medium text-xl" >{{ amountOfQty }}</span>
               <button class="btn-actions" @click="amountOfQty++" type="button">
                  +
               </button>
            </div>
         </div>
         <p class="font-medium text-gray-200" >
            lorem ipsum sit amet dolor is text dummy sit amet dolor is text dummy
         </p>
      </div>
      <div class="btn-footer" >
         Add to box
      </div>
      <NavBar></NavBar>
   </section>
</template>

<style scoped >
   
   .bg-green {
      background: #89DF3B;
   }
   
   .card-wrapper {
      @apply mt-7 w-full;
   }
   
   .card-detail-header {
      @apply rounded-t-3xl rounded-b-none px-7 pt-10 pb-11 bg-green relative;
   }
   
   .img-preview {
      @apply absolute right-5 -top-40;
      animation: slide-pop .55s forwards;
   }
   
   .badge {
      @apply bg-gray-50 rounded-full text-center px-3 py-2 absolute -top-5 shadow;
      animation: slide-pop .55s forwards;
   }
   
   .box-qty {
      @apply mt-16;
   }
   
   .qty-actions {
      @apply bg-gray-800 bg-opacity-50 rounded-xl w-5/12 mt-3 mb-10 flex items-center justify-evenly py-3;
   }
   
   .btn-actions {
      @apply text-gray-100 text-2xl px-2 rounded font-medium;
   }
   
   .btn-footer {
      @apply w-full py-7 duration-300 font-medium text-gray-100 text-center;
      background: #F96094;
   }
   
   .btn-footer:active {
      letter-spacing: 1.2px;
   }
   
   @keyframes slide-pop {
      from {
         transform: scale(.5) rotate(25deg) translate(10%, -15%);
      } to {
         transform: scale(1) rotate(0deg) translate(0, 0);
      }
   }
</style>

<script setup >
   
   import { ref, watch, defineProps } from 'vue'
   import NavBar from './NavBar.vue'
   import store from '../store'
   
   const amountOfQty = ref(0)
   watch(amountOfQty, value => {
      if ( value <= 0 ) amountOfQty.value = 0
   })
   
   //Handler for badge
   const badgeClick = e => {
      const target = e.target.classList;
      if ( target.contains('far') ) target.replace('far', 'fas')
      else target.replace('fas', 'far')
   }
</script>