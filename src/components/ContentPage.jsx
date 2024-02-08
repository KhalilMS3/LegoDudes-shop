import Title from "./Title"
import ProductCard from "./ProductCard"
import { products } from "../assets/legoduds"
import { useParams } from "react-router-dom"

export default function ContentPage({amount, setAmount, category, cart, setCart}){
  const {id} = useParams()
  return (
    <main>
          <Title category={id}/>
         {/* elements we get by .map() should usually have a unique key  
            in this case, we have prodid as a unique key to make elements diff from each other */}
          {products.map(product => 
            <ProductCard 
            cart={cart}
            setCart={setCart}
            key={product.prodid} 
            prodid={product.prodid}
            category={product.category} 
            img={product.imagefile} 
            title={product.title} 
            price={product.price}
            amount={amount}
            setAmount={setAmount}
            />)}
        </main>
  )
}
