import ProductList from "@/components/shared/layouts/ProductList"
// import sampleData from "@/db/sample-data"
import { getLatestProducts } from "@/lib/actions/product.actions"

const Homepage = async ()=>{

  const latestProducts = await getLatestProducts();
  // console.log(latestProducts, "latest products")

  return (
    <ProductList 
      data={latestProducts} 
      title="Newest Arrivals"
    />
  )

  
}

export default Homepage