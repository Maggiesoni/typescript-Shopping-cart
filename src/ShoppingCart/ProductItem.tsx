import React from 'react'
import {ProductItemProps } from '../Types/Types'


export default function ProductItem({productProp, addProductProps}: ProductItemProps ) {

  return (
    <div className="card text-center">
    <img
      className="card-img-hitop"
      src={productProp.img}
      alt={productProp.name}
      style={{width: 300, height: 300}}
    />
    <div className="card-body text-center">
      <h4 className="card-title">{productProp.name}</h4>
      <p className="card-text">{productProp.price}</p>
      <button onClick={()=>{addProductProps(productProp)}}
        className="btn btn-success"
      >
        Add to cart
      </button>
    </div>
  </div>
  )
}
