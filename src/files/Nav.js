import React from 'react'
import img1 from '../images/img1.jpg'
import '../files/Nav.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import nan2 from '../images/nan2.jpg'
import CartPage from './Cartpage'
const Nav = () => {


  const navigate=useNavigate()

  const naviagtetoveg=(data)=>{
    console.log(data, "receive" )
    navigate(data)
  }
  return (
    <div>
          
            
     <Link to="/" > <img className='no' src ={img1} alt=""/> </Link>
        <div className='move'>
          {/* <div>
            <select class="form-select" aria-label="Default select example" className='no3'>
  <option selected>All Categories</option>
  <option value="1">Groceries</option>
  <option value="2">Drinks</option>
  <option value="3">Chocolates</option>
</select>
          </div> */}
        
        <div>
          <input className='no4' type='text' placeholder='Search For More Than 20,000 products'/>
        </div>
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>

        </div>
        <div>
          <p>For Support? <span className='no5'> +980-34984089</span> </p>
        </div>
        <div className='no6'>
          <i class="fa-solid fa-user"></i>
          <i class="fa-regular fa-heart"></i>
        </div>
        <div>
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className='no7'><p className='clk'><i class="fa-solid fa-cart-arrow-down"></i> cart</p></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body" >
   <CartPage/>
  </div>
</div>
        </div>
       
        </div>
        <section className='pads'>
          <div className='no12'>
            <div>
            <select class="form-select" aria-label="Default select example" className='no10'>
  <option selected >Menu</option>
  <option value="1" >Fruit</option>
  <option value="2">Juice</option>
  <option value="3">Snacks</option>
  <option value="3">Veg</option>
  <option value="3"> NonVeg</option>
  <option value="3">Sweet</option>
</select>
</div>
<div>
<nav>
<Link to="/fruit"> <p className='cds'>Fruit</p>  </Link>
 <Link to ="/veg"> <p className='cds'>Vegetables</p> </Link>
 <Link to ="/juice"> <p className='cds'>Juice</p> </Link>
 <Link to='/sweet'><p className='cds'>Sweet</p> </Link> 
 <Link to ="/snaks"> <p className='cds'>Snacks</p> </Link>
 <Link to ="/vegfood"> <p className='cds'>Veg Food</p> </Link>
 <Link to='/nonveg'> <p className='cds' >Nonveg</p></Link>
  <br/><br></br><h5 className='get'><i class="fa-solid fa-gift"></i> Get pro version</h5>
</nav>
</div>
          </div>
        </section>
       
   </div>
   
  )
}

export default Nav