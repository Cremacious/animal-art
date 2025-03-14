import ProductPreviewList from "@/components/shared/product/product-preview-list";
import { getLatestProducts } from "@/lib/actions/product.action";

const Homepage = async () => {
const latestProducts = await getLatestProducts();


  return ( <>
  <ProductPreviewList data={latestProducts} />
  
  </> );
}
 
export default Homepage;