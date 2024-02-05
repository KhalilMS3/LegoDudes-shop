import React from 'react'

export default function CartProduct({title, price, quantity, setCart, prodid}){
    const removeItem = ()=>{
        console.log("du fjerner")
        setCart(prevCart => prevCart.map(item => item.prodid === prodid ? {...item, quantity :item.quantity -1} : item)
        .filter(item => item.quantity > 0))
    }
  return (
    <li>
        <span className="title">{title}</span>
        <span className="price">{price},-</span>
        <span className="quantity">x{quantity}</span>
        <span className="functions">
            <button onClick={removeItem}>X</button>
        </span>
    </li>
  )}
