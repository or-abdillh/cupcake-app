import { createStore } from 'vuex'

const store = createStore({
   state() {
      return {
         imgPreview: 'cupcake-1.png'
      }
   },
   mutations: {
      setImgPreview(state, img) {
         state.imgPreview = img
      }
   }
})

export default store