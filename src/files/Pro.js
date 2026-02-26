import React, { useState } from 'react'
import '../files/Pro.css'
import it1 from '../images/it1.jpg'
import it2 from '../images/it2.jpg'

import it3 from '../images/it3.jpg'
import it5 from '../images/it5.jpg'
import it6 from '../images/it6.jpg'
import it7 from '../images/it7.jpg'
import it8 from '../images/it8.jpg'
import im1 from '../images/im1.jpg'
import im2 from '../images/im2.jpg'
import it4 from '../images/it4.jpg'

import pto1 from '../images/pto1.jpg'
import pto2 from '../images/pto2.jpg'
import pto3 from '../images/pto3.jpg'
import phone from '../images/phone.jpg'
import app from '../images/app.jpg'
import google from '../images/google.jpg'


const Pro = () => {
    const[count ,setCount] = useState(1)
  return (
    <div>
        <section >
           <div className='ic'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            <i class="fa-regular fa-heart go4"></i>
          </div>
            <div className='ic2'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            <i class="fa-regular fa-heart go4"></i>
          </div>
            <h2 className='dd'>Trending Products</h2>
             
        <div className='overs'>
     
        <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it1} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p> 
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it2} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it3} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>



 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it1} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
        </div>
        </section>
        <br></br>
        <br></br>
        <section>
            <div className='overz'>

                 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it6} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it7} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
    <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it8} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
    <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it2} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
  
   

            </div>
        </section>

        <br></br>
        <section>
            <div className='mains'>
                <div className='do31'>
                    <img  className='do33' src={im1} alt=""/>
                </div>
                <div className='do32'>
                  <img className='do34' src={im2} alt=""/>

                </div>
            </div>
            <div className='roll'>
            <div>
                <h2 className='do38'>Upto 25% Off</h2>
                <h2>Luxa Dark Chocolate</h2>
                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                <button className='bt1'>Shop now</button>
            </div>
             <div>
                <h2 className='do39'>Upto 25% Off</h2>
                <h2>Creamy Muffins</h2>
                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                <button className='bt2'>Shop now</button>
            </div>
            </div>
        </section>
      









        <section>
            <div className='ic5'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            <i class="fa-regular fa-heart go4"></i>
          </div>
            <h2 className='do40'>Best selling products</h2>
              <div className='overrr'>
             <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it6} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it8} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it2} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it3} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>


</div>
        </section><br></br><br></br>
        <section>
          <div className='ovr'>
            <div>
              <h1 className='sp1'>Get <span className='sp'> 25% </span> <br></br> <span className='sp'>Discount </span>on your <br></br> first purchase</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
              Dictumst amet, metus, sit massa posuere maecenas. <br></br>At tellus ut nunc amet vel egestas.</p>
            </div>
            <div>
              <label>Name</label><br></br>
              <input className='bgp1' type='text' placeholder='Name'/>
              <br></br><br></br>
              <label>Email</label><br></br>
              <input className='bgp2' type='text' placeholder='abc@mail.com'/>
              <br></br><br></br>

              <input type='checkbox'/>
              <label> Subscribe to the newsletter</label>
              <br></br>
              <br></br>
              <button className='but101'>Submit</button>
            </div>
          </div>
        </section>
        <br></br>
        <br></br>
        <section>
           <div className='ic6'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            {/* <i class="fa-regular fa-heart go4"></i> */}
           <i class="fa-regular fa-heart go5"></i></div>
           <h2 className='do324'>
            Most popular products
           </h2>
          <div className='or'>
             <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it2} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it3} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it6} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it8} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        
          <section>
           <div className='ic6'><i class="fa-regular fa-heart go1"></i>
           <i class="fa-regular fa-heart go2"></i>
           <i class="fa-regular fa-heart go3"></i>
            {/* <i class="fa-regular fa-heart go4"></i> */}
           <i class="fa-regular fa-heart go5"></i></div>
           <h2 className='do324'>
            Just arrived
           </h2>
          <div className='or'>
             <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it5} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it1} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it7} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>
 <div class="card"  >
               {/* <i  class="fa-regular fa-heart co" ></i> */}
  <img className='img2' src={it4} alt="..."/>
  <div class="card-body">
   <p>Sunstar Fresh Melon Juice</p>
   <p>1 Unit <i class="fa-solid fa-star bgs"></i> 4.5</p>
   <h2>$18.00</h2>
   <div className='over1'>
   <div>
 
   <button className='butt' onClick={()=> setCount(count-1)}>-</button>
   </div>
   <div>
     <h4>{count}</h4>
     </div>
    <div>
   
   <button className='butt1' onClick={()=> setCount(count+1)}>+</button>
   </div>
   </div>
  </div>
</div>

          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <section>
                    <h2 className='do35'> Our Recent Blog</h2>
                <div className='heads'>
                    <div>
                        <img className='pto1' src={pto1} alt=''/> <br></br>
                     <p> <i class="fa-regular fa-calendar"></i>22 aug 2021  <i class="fa-regular fa-folder"></i>Tips & Tricks</p> 
                        <h2  className='clr'>Top 10 casual look ideas <br></br>to dress up your kids</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipi elit. Aliquet eleifend viverra enim <br></br>tincidunt donec quam. A in arcu, hendrerit <br></br>neque dolor morbi...</p>
                    </div>
                    <div>
                        <img className='pto1' src={pto2} alt=''/> <br></br>
                     <p> <i class="fa-regular fa-calendar"></i>25 aug 2021  <i class="fa-regular fa-folder"></i>Trending</p> 
                        <h2 className='clr'>Latest trends of wearing <br></br>street wears supremely</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipi elit. Aliquet eleifend viverra enim <br></br>tincidunt donec quam. A in arcu, hendrerit <br></br>neque dolor morbi...</p>
                    </div>
                     <div>
                        <img className='pto1' src={pto3} alt=''/> <br></br>
                     <p> <i class="fa-regular fa-calendar"></i>28 aug 2021  <i class="fa-regular fa-folder"></i>Inspiration</p> 
                        <h2 className='clr'>10 Different Types of <br></br>comfortable clothes ideas <br></br>for women</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipi elit. Aliquet eleifend viverra enim <br></br>tincidunt donec quam. A in arcu, hendrerit <br></br>neque dolor morbi...</p>
                    </div>
                    
                </div>
                </section>
                <br></br>
                <br></br>
                <br></br>
                <section>
                    <div>
                        <div className='raf'>
                            <div>
                                <img className='up' src={phone} alt=''/>
                            </div>
                            <div className='zero'>
                                <h1>Shop faster with foodmart App</h1><br></br>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus<br></br>
                                nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper<br></br>
                                erat ac in suspendisse iaculis. Amet blandit tortor praesent ante vitae. A, enim pretiummi<br></br>
                                senectus magna. Sagittis sed ptibus liberolectus non et psryroin.</p>
                                <div className='apps'>
                                    <img src={app} alt=''/>
                                    <img src={google} alt=' '/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br>
                <br></br>
                <br></br>
                <section>
                    <h2 className='do36'>People are also looking for</h2>
                    <div className='flxx'>
                        <div className='flx'>
                            <button className='bts1'>Blue diamon almonds</button>
                            <button className='bts2'>Angie's Boomchickapop Corn</button>
                            <button className='bts3'>Salty kettle Corn</button>
                            <button className='bts4'>Chobani Greek Yogurt</button>
                            <button className='bts5'>Sweet Vanilla Yogurt</button>
                        </div>
                        <div className='flx1'>
                            <button className='bts1'>Foster Farms Takeout Crispy wings</button>
                            <button className='bts2'>Warrior Blend Organic</button>
                            <button className='bts3'>Chao Cheese Creamy</button>
                            <button className='bts4'>Chicken meatballs</button>
                            <button className='bts5'>Chicken meatballs</button>
                        </div>
                        <div className='flx2'>
                            <button className='bts1'>Angie's Boomchickapop </button>
                            <button className='bts2'>Salty kettle </button>
                            <button className='bts3'>Chobani Greek Yogurty</button>
                            <button className='bts4'>Sweet Vanilla Yogurt</button>
                            <button className='bts5'>Foster Farms Takeout Crispy wings</button>
                        </div>
                        <div className='flx3'>
                            <button className='bts1'>Warrior Blend Organic</button>
                            <button className='bts2'>Chao Cheese Creamy</button>
                            <button className='bts3'>Chicken meatballs</button>
                           
                        </div>
                    </div>
                </section>

        </div>

    </div>
  )
}

export default Pro