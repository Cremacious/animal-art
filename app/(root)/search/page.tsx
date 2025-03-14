import SearchSidebar from './search-sidebar';
import { getLatestProducts } from '@/lib/actions/product.action';
import ProductCard from '@/components/shared/product/product-card';

const SearchPage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <div className="flex flex-row">
        <SearchSidebar />
        <div className="grid md:grid-cols-2">
          {latestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
