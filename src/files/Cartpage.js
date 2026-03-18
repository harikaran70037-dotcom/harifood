import react from 'react'
import New from '../files/New';
import { useDispatch, useSelector } from 'react-redux';
import {  removeFromCart } from '../files/CounterSlice';

const CartPage =()=>{


  const cartProducts = useSelector((state) => state.cart.cartItems) ||[];
    const dispatch=useDispatch(); 


   const deleteCart = (item) =>{
    dispatch (removeFromCart(item))
   }
   
  
  
return(
<div>
    <center> <h1>
    CartPage
    </h1>   </center>


     <div className='row' style={{display:"flex" , gap :"50px"}}>
        {cartProducts.map((item)=> (
            <div  key={item.id} >
                <div className='card'>
                    <div className='no1' >
                    <img  src={item.img} width={220} height={200}  />
                < div className='card-body ss'>
                <h5 className='card-title'>{item.title}</h5>
                <p className='card-text'>{item.price}</p></div>
                
       
<button className='but' onClick={() => deleteCart(item)}>Remove</button>
<br></br>

{/* <button onClick={()=>increqantity}> + </button>
<span>{item.quantity}</span>
<button> - </button> */}

                </div>


                </div>
                </div>
        ))}
    </div>
</div>
)
}
export default CartPage;