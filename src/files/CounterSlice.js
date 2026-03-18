import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  cartItems :[],
  amount:0
}

export const Counterslice = createSlice ({
  name:"cart",
  initialState,
  reducers:{
    addToCart :(state , action )=>{
      const items = action.payload
      const itm = state.cartItems.find(i => i.id===items.id)
      if(itm){
        itm.quantity +=1
      }
      else{
        state.cartItems.push({...items , quantity :1})
      }
      localStorage.setItem ("cartitems" ,JSON.stringify(state.cartItems))
    },
    updatequantity :(state , action) =>{
      
      const {id,change} = action.payload
    
      const item = state.cartItems.find(i => i.id === id)
      if(change >1){
        item.quantity +=1
      
      }
        if(item.qiuantity <1){
          item.quantity =1
        }
      localStorage.setItem ("cartitems" ,JSON.stringify(state.cartItems))
    },
    removeFromCart :(state ,action ) => {
      state.cartItems = state.cartItems.filter (i => i.id !== action.payload.id)
      localStorage.setItem ("cartitems" ,JSON.stringify(state.cartItems))

    }
  }
})


export const{addToCart , updatequantity , removeFromCart} = Counterslice.actions
export default Counterslice.reducer