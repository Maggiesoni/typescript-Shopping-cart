import React from 'react'
import {cartModalPropsType  } from '../Types/Types'


export default function CartModal({cartModalProps, removeProduct, increaseDecreaseItem}:cartModalPropsType) {
// console.log(cartModalProps)


  return (
    <div>
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Image</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {cartModalProps.map((product,index)=>{
                    return(
                      <tr key={index}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td><img src={product.img} alt={product.name} style={{width: "80px", height: "80px"}}/></td>
                      <td>
                      {product.quantity}
                      <button onClick={()=>increaseDecreaseItem(product.id, 1)} className="btn btn-success
                      ">+</button>
                      <button onClick={()=>increaseDecreaseItem(product.id, -1)} className="btn btn-danger
                      ">-</button></td>
                      <td>{product.price}</td>
                      <td><button onClick={()=>removeProduct(product.id)}>delete</button></td>
                      </tr>
                        )
                  })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
