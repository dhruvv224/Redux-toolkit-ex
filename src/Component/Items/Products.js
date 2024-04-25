import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';
import carticon from '../Assets/shopping-cart.png';
import flashicon from '../Assets/flash.png'
import { add } from '../../Store/Cartslice';
import { UseDispatch, useDispatch } from 'react-redux';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
  };
const handlerAdd=(product)=>{
  dispatch(add(product))


}
  return (
    <div className='product-container'>

      {products.map((product) => (
        <div key={product.id} className='product-card'>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          <p>{product.description}</p>
          <h4>{product.price}₹</h4>
          <button className='btn btn-warning' style={{ width: '150px' }} onClick={()=>handlerAdd(product)}>
            <img src={carticon} alt='Add to cart' style={{ width: '24px' }} />ADD TO CART
          </button>
          <button className='btn btn-success' style={{ width: '150px' ,marginLeft:'20px'}}>
            <img src={flashicon} alt='Add to cart' style={{ width: '24px' }} /> BUY NOW
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
