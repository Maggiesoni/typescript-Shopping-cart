import React from 'react'

export default function ProductItem() {
  return (
    <div className="card text-center">
    <img
      className="card-img-hitop"
      src= "./img/vsphone.jpg"
      alt="phone"
      style={{width: 300, height: 300}}
    />
    <div className="card-body text-center">
      <h4 className="card-title">VinSmart Live</h4>
      <p className="card-text">Android 9.0 (Pie)</p>
      <button
        className="btn btn-success"
      >
        Add to cart
      </button>
    </div>
  </div>
  )
}
