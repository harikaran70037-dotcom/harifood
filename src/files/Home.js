import React from 'react'

// import bac1 from '../images/bac1.jpg';
// import bac2 from '../images/bac2.jpg';
// import bac3 from '../images/bac3.jpg';

// import bac5 from '../images/bac5.jpg';
import Demo from '../files/Demo.js'
import backgroung from '../images/backgroung.jpg'
import Pro from '../files/Pro.js'
import Ext from '../files/Ext.js'


const Home = () => {
  return (
    <div>

         <section>
          <img className='omg animate__animated animate__fadeInUp' src={backgroung} alt =""/>
        </section>
       <Demo/>
      <Pro/>
      <Ext/>
    </div>
    
  )
}

export default Home