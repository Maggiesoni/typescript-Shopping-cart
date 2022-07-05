import React, { useState } from 'react'
import { CartArray, CartObject, PhoneProducts } from '../Types/Types'
import CartModal from './CartModal'
import ProductList from './ProductList'

export default function Cart() {
  const [cartArray, setCartArray]=useState<CartObject[]>([])

  const addToCart=(product: PhoneProducts)=>{
    let indexProduct = cartArray.findIndex((item)=>item.id===product.id)
    let updatedProduct={...product, quantity:1}
    const newProductArray=[...cartArray,updatedProduct]
   
    //if(indexProduct!==-1){newProductArray[indexProduct].quantity+=1
      console.log(newProductArray)
    }
    
  //   else{
  //     let updatedProduct={...product, quantity:1} 
  //     let newProductArray=[...cartArray, updatedProduct]
  //     setCartArray(newProductArray)
  //   }
  
  // }
    const calculateTotalQuantity =(cartArray:CartArray)=>{
    return cartArray.reduce((accummulator,current)=>{
      return(accummulator+=current.quantity);
    },0)
  }
  
  const removeProduct=(id:number|string)=>{
    let updatedProductArray=[...cartArray];
    let indexProduct = updatedProductArray.findIndex((cartItem)=>{ 
      return cartItem.id ===id
    });

    if(indexProduct!==-1){
      updatedProductArray.splice(indexProduct, 1)
    }
    setCartArray(updatedProductArray)
  }
  const increaseDecreaseItem=(id: number|string,quantity: number)=>{
    let updatedQuantityArray=[...cartArray];
    let indexOfProduct=updatedQuantityArray.findIndex((item,index)=>{
     return item.id===id
         })
    if(indexOfProduct!==-1){
      //console.log(indexOfProduct)
      updatedQuantityArray[indexOfProduct].quantity+=quantity
    }
  setCartArray(updatedQuantityArray)
  }
  
  return (
    <div className="container-fluid">
    <h3 className="text-center">Shopping Cart</h3>
    <div className="text-right">
      <span
        style={{width: 17, cursor: "pointer"}}
        data-toggle="modal"
        data-target="#modelId"
      >
        <i className="fa fa-cart mr-5">
          <i className="fa fa-cart-arrow-down"></i>(
            {calculateTotalQuantity(cartArray)}) Cart
        </i>
      </span>
    </div>
    <CartModal cartModalProps={cartArray} removeProduct={removeProduct} increaseDecreaseItem={increaseDecreaseItem} />
    <ProductList addProductProps={addToCart}/>
  </div>
  ) 
 }

