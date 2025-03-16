import {
  getAllProducts,
  getAllSizes,
  getAllTypes,
  getLatestProducts,
} from '@/lib/actions/product.action';

import ProductCard from '@/components/shared/product/product-card';

const SearchPage = async (props: {
  searchParams: Promise<{
    animalType?: string;
    size?: string;
    price?: string;
    page?: number;
  }>;
}) => {
  const {
    animalType = 'all',
    size = 'all',
    price = 'all',
    page = '1',
  } = await props.searchParams;

  const getFilteredUrl = ({
    a,
    s,
    p,
  }: {
    a?: string;
    s?: string;
    p?: string;
  }) => {
    const params = { animalType, size, price };
    if (a) params.animalType = a;
    if (s) params.size = s;
    if (p) params.price = p;
    return `/search?${new URLSearchParams(params).toString()}`;
  };

  const products = await getAllProducts({
    animalType,
    size,
    price,
    page: Number(page), // or any other page number you want to start with
  });

  console.log(products);
  const latestProducts = await getLatestProducts();
  const types = await getAllTypes();
  const sizes = await getAllSizes();

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <div>Animals</div>
          {types.map((type) => (
            <div key={type.animalType}>{type.animalType}</div>
          ))}
          <div>Size</div>
          {sizes.map((size) => (
            <div key={size.size}>{size.size}</div>
          ))}
        </div>
        <div className="grid md:grid-cols-2">
          {products.data.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, price: product.price.toString() }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
