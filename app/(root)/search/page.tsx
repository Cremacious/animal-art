import {
  getAllProducts,
  getAllSizes,
  getAllTypes,
} from '@/lib/actions/product.action';

import Link from 'next/link';
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
    page: Number(page), 
  });

  console.log(products);
  const types = await getAllTypes();
  const sizes = await getAllSizes();

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <div>Animals</div>
          <li>
            <Link
              className={`${
                (animalType === 'all' || animalType === '') && 'font-bold'
              }`}
              href={getFilteredUrl({ a: 'all' })}
            >
              Any
            </Link>
          </li>
          {types.map((x) => (
            <li key={x.animalType}>
              <Link
                className={`${animalType === x.animalType && 'font-bold'}`}
                href={getFilteredUrl({ a: x.animalType })}
              >
                {x.animalType}
              </Link>
            </li>
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
