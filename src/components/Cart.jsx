import CartProduct from "./CartProduct";

export default function Cart({toggle, cart, setCart}){
    
    return(
        <section id="cart" className={toggle ? "show" : null}>
        <h2>Din handlevogn</h2>
        <ul id="cartlist">
            {cart.map(product => <CartProduct key={product.prodid} prodid={product.prodid} title={product.title} price={product.price} quantity={product.quantity} setCart={setCart}/>)}

        </ul>
    </section>
    )
}