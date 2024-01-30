import Title from "./Title"
import ProductCard from "./ProductCard"
import { products } from "../assets/legoduds"

export default function ContentPage(){
  return (
    <main>
          <Title/>

         {/* elements we get by .map() should usually have a unique key  
            in this case, we have prodid as a unique key to make elements diff from each other */}
          {products.map(product => <ProductCard 
            key={product.prodid} 
            category={product.category} 
            img={product.imagefile} 
            title={product.title} 
            price={product.price}/>)}
          
        </main>
  )
}
