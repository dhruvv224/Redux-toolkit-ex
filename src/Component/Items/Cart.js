import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { remove } from '../../Store/Cartslice';

export const Cart = () => {
  const products=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  console.log(products)
  const handleremove=(productID)=>{
    dispatch(remove(productID))

  }
  return (
    <div className='product-container'>
      {
        products.map((product)=>(
          <div key={product.id} className='product-card'>
            <h3>{product.title}</h3>
            <img src={product.image} style={{width:'100px'}}></img>
            <p>{product.description}</p>
            <h2>{product.price}₹</h2>
            <button className='btn btn-danger' onClick={()=>handleremove(product.id)}>REMOVE</button>
           
            

          </div>
        ))
      }


    </div>
  )
}
export default Cart;