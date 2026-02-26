import React from 'react'
import '../files/Ext.css'
import mart from '../images/mart.jpg'






const Ext = () => {
  return (
    <div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section>
            <div  className='overall'>
                <div class="animate__animated animate__backInUp">
                   <h3><i   class="fa-solid fa-cart-shopping rg1 "></i></h3> 
                   <h4>Free delivery</h4>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
                <div class="animate__animated animate__backInUp">
                    <h3><i class="fa-solid fa-shield rg1"></i></h3>
                    <h4>100% secure <br></br>payment</h4>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
                <div class="animate__animated animate__backInUp">
                    <h3><i class="fa-solid fa-building-columns rg1"></i></h3>
                    <h4>Quality guarantee</h4>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
                <div class="animate__animated animate__backInUp">
                    <h3><i class="fa-solid fa-heart rg1"></i></h3>
                    <h4>guaranteed savings</h4>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
                <div class="animate__animated animate__backInUp">
                  
                    <h4>  <i class="fa-solid fa-gift rg1"></i></h4>
                    <h3>Daily offers</h3>
                   <p>Lorem ipsum dolor sit <br></br>amet, consectetur adipi <br></br>elit.</p>

                </div>
            </div>


        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section>
            <div className='overall2'>
                <div>
                    <img src={mart} alt=''/>
                    <h3 className='ii'><i class="fa-brands fa-facebook g1"></i><i class="fa-brands fa-instagram g2"></i><i class="fa-brands fa-youtube g3"></i><i class="fa-brands fa-amazon g4"></i><i class="fa-brands fa-square-twitter g5"></i></h3>
                </div>
                <div>
                    <h5>Ultras</h5>
                    <p>About us</p>
                    <p>Conditions</p>
                    <p>Our Journals</p>
                    <p>Careers</p>
                    <p>Affiliate Programme</p>
                    <p>Ultras Press</p>
                    
                </div>
                <div>
                    <h5>Customer Service</h5>
                    <p>FAQ</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Returns & Refunds</p>
                    <p>Cookie Guidelines</p>
                    <p>Delivery Information</p>
                </div>
                <div>
                    <h5>Customer Service</h5>
                    <p>FAQ</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Returns & Refunds</p>
                    <p>Cookie Guidelines</p>
                    <p>Delivery Information</p>
                </div>
                <div>
                    <h5>Subscribe Us</h5>
                    <p>Subscribe to our newsletter to get</p>
                    <p>updates about our grand offers.</p>
                    <input type='text' placeholder='Enter your email'/>
                </div>
            </div>
        </section>
        <hr></hr>
        <footer>© 2023 Foodmart. All rights reserved.</footer>
        <h5 className='hari'>THE WEBSITE CREATE BY "HARII"</h5>
        <hr></hr>
    </div>
    
  )
}

export default Ext