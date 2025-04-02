import { configureStore } from '@reduxjs/toolkit'
import { counterSlice, removePro } from '../features/Addtocart/addproductslice'
import { userlogin } from '../features/Addtocart/user_login/login'

export const store = configureStore({
  reducer: {
    addToCart: counterSlice.reducer,
    qtytotal: counterSlice.reducer,
    removePro : counterSlice.reducer,
    user: userlogin.reducer,
  },
})