import React from 'react'
import Ext from './Ext'
import Vg from './Vg'

const Vegfood = () => {
  return (
    <div>
    <div className="row">
  {Vg.map((itm) => (
    <div className="col" key={itm.id}>
      <div className="card animate__animated animate__fadeInUp " style={{height:"470px",boxShadow:" 0px 0px 5px 0px black" , marginBottom:"45px",padding:"10px"}}>
        <img
          src={itm.img}
          className="card-img-top"
          alt={itm.title}
        />
        <div className="card-body">
          <h5 className="card-title">{itm.title}</h5>
          <p>{itm.description}</p>
          <div style={{display:"flex", justifyContent:"space-between"}}>

          <p className="card-text"  style={{ color:"red" , fontSize:"15px", fontWeight:"bold"}} >{itm.price}</p>

             <button style={{border:"1px solid black" ,width:"110px", borderRadius:"10px", backgroundColor:"lightgray" }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
<br></br>
<br></br>

<Ext/>
    </div>
  )
}

export default Vegfood