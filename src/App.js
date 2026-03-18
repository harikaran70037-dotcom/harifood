import logo from './logo.svg';
import Nav from './files/Nav';
import Home from './files/Home';
import Demo from './files/Demo';
import Pro from './files/Pro';
import Fruit from './files/Fruit';
import Ext from './files/Ext';
import Veg from './files/Veg';
import Juice from './files/Juice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import New from './files/New';
// import { Router } from 'express';
import "./App.css"
import Snaks from './files/Snaks';
import Sweet from './files/Sweet';
import Vegfood from './files/Vegfood';
import Nonveg from './files/Nonveg';
import CartPage from './files/Cartpage';

function App() {
  return (
    <div  className='fullproject'>
      <BrowserRouter>
    
      <Nav/>
    
      
      
      <Routes>
         <Route path='/'element={ <Home/>}/> 
       <Route path='/fruit'element={ <Fruit/>}/>   
       <Route path='/juice'element={ <Juice/>}/>   
       <Route path='/veg'element={ <Veg/>}/>   
       <Route path='/snaks'element={<Snaks/>}/>
       <Route path='/sweet'element={<Sweet/>}/>
       <Route path='/vegfood'element={<Vegfood/>}/>
       <Route path='/nonveg' element ={<Nonveg/>}/>
       <Route path='/cartpage' element={<CartPage/>}/> 
     
</Routes>



     </BrowserRouter>
   
    </div>
  );
}

export default App;
