import ProductCard from './product-card';
import { Product } from '@/types';

const ProductPreviewList = ({ data }: { data: Product[] }) => {
  return (
    <>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductPreviewList;
