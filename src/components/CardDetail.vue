<template>
   <section class="card-wrapper">
      <div class="card-detail-header">
         <img src="/cupcake-2.png" class="img-preview" width="200" />
         <div class="box-qty">
            <strong class="font-medium text-gray-100 text-xl" >QTY</strong>
            <div class="qty-actions">
               <button :disabled="amountOfQty === 0" class="btn-actions" @click="amountOfQty--" type="button">
                  -
               </button>
               <span class="text-gray-100 font-medium" >{{ amountOfQty }}</span>
               <button class="btn-actions" @click="amountOfQty++" type="button">
                  +
               </button>
            </div>
         </div>
      </div>
      <button class="btn-footer" >
         Add to box
      </button>
      <NavBar></NavBar>
   </section>
</template>

<style scoped >
   
   .bg-green {
      background: #89DF3B;
   }
   
   .card-wrapper {
      @apply self-end mt-7 w-full;
   }
   
   .card-detail-header {
      @apply rounded-t-3xl rounded-b-none px-7 pt-10 pb-11 bg-green relative;
   }
   
   .img-preview {
      @apply absolute right-2 -top-20;
   }
   
   .box-qty {
      @apply mt-16;
   }
   
   .qty-actions {
      @apply bg-gray-600 rounded-xl w-5/12 mt-3 mb-10 flex justify-evenly py-5;
   }
   
   .btn-actions {
      @apply bg-gray-50 text-gray-500 px-2 rounded font-medium;
   }
   
   .btn-footer {
      @apply w-full py-7 font-medium text-gray-100;
      background: #F96094;
   }
   
</style>

<script setup >
   
   import { ref, watch } from 'vue'
   import NavBar from './NavBar.vue'
   
   const amountOfQty = ref(0)
   watch(amountOfQty, value => {
      if ( value <= 0 ) amountOfQty.value = 0
   })
</script>