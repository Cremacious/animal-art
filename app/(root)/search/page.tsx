import {
  getAllPrices,
  getAllProducts,
  getAllSizes,
  getAllTypes,
} from '@/lib/actions/product.actions';

import { Button } from '@/components/ui/button';
import GalleryCard from '@/components/shared/product/gallery-card';
import Link from 'next/link';
import ProductCard from '@/components/shared/product/product-card';
import React from 'react';
import { capitalizeFirstLetter } from '@/lib/utils';

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

  const types = await getAllTypes();
  const sizes = await getAllSizes();
  const prices = await getAllPrices(); // TODO: Fix decimal error caused by Prisma

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4 bg-gray-100 p-4">
        <div className="mb-4">
          <Link href="/search">
            <Button className="w-full">Clear Search</Button>
          </Link>
        </div>

        {/* Animal Type Filter */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Animal Type</h2>
          <ul className="flex flex-wrap md:flex-col gap-2">
            {types.map((x) => (
              <li key={x.animalType}>
                <Link
                  href={getFilteredUrl({ a: x.animalType })}
                  className={`block ${
                    animalType === x.animalType ? 'font-bold text-blue-600' : ''
                  }`}
                >
                  {capitalizeFirstLetter(x.animalType)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Size Filter */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Sizes</h2>
          <ul className="flex flex-wrap md:flex-col gap-2">
            {sizes.map((x) => (
              <li key={x.size}>
                <Link
                  href={getFilteredUrl({ s: x.size })}
                  className={`block ${
                    size === x.size ? 'font-bold text-blue-600' : ''
                  }`}
                >
                  {x.size}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Prices</h2>
          <ul className="flex flex-wrap md:flex-col gap-2">
            {/* {prices.map((x) => (
              <li key={x.price}>
                <Link
                  href={getFilteredUrl({ p: x.price })}
                  className={`block ${
                    price === x.price ? 'font-bold text-blue-600' : ''
                  }`}
                >
                  {x.price}
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
      </div>

      {/* Product Grid */}
      <div className="md:w-3/4 w-full p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.data.map((product) => (
          <GalleryCard
            key={product.id}
            product={{ ...product, price: product.price.toString() }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
