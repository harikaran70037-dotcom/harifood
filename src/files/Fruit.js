import React from 'react'
import New from '../files/New'
import Ext from './Ext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../files/CounterSlice'

const Fruit = () => {

  // const cartProducts = useSelector((state) => state.cart.cartItems) || []

  const cartProducts = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  const addCart = (itm) => {
    dispatch(addToCart(itm))
  }

  const deleteCart = (itm) => {
    dispatch(removeFromCart(itm))
  }

  return (
    <div>
      <div className="row">
        {New.map((itm) => (
          <div className="col" key={itm.id}>
                 <div className="card animate__animated animate__fadeInUp " style={{height:"470px",boxShadow:" 0px 0px 5px 0px black" , marginBottom:"45px",padding:"10px"}}>

              
              <img
                src={itm.img}
                className="card-img-top"
                alt={itm.title}
              />

              <div className="card-body">
                <h5 className="card-title">{itm.title}</h5>
                <p className="card-text">{itm.description}</p>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ color: "red", fontWeight: "bold" }}>
                    {itm.price}
                  </p>

                  {
                    cartProducts.find((p) => p.id === itm.id)
                      ? (
                        <button
                          className="but" className='but' style={{border:"1px solid black" ,width:"110px", borderRadius:"10px", backgroundColor:"lightgray" }} 
                          onClick={() => deleteCart(itm) }
                        >
                          Remove
                        </button>
                      )
                      : (
                        <button
                          className="but" className='but' style={{border:"1px solid black" ,width:"110px", borderRadius:"10px", backgroundColor:"lightgray" }}
                          onClick={() => addCart(itm)}
                        >
                          Add To Cart
                        </button>
                      )
                  }

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Ext />
    </div>
  )
}

export default Fruit