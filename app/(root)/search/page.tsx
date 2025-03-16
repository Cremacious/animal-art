import {
  getAllProducts,
  getAllSizes,
  getAllTypes,
} from '@/lib/actions/product.action';

import { Button } from '@/components/ui/button';
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

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4">
        <div className="p-4 bg-gray-100">
          <div className="mb-4">
            <Link href="/search">
              <Button>Clear Search</Button>
            </Link>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold">Animal Type</h2>
            <ul className="flex flex-wrap md:flex-col">
              {types.map((x) => (
                <li key={x.animalType} className="mr-2 mb-2 md:mr-0 md:mb-0">
                  <Link
                    className={`${animalType === x.animalType && 'font-bold'}`}
                    href={getFilteredUrl({ a: x.animalType })}
                  >
                    {capitalizeFirstLetter(x.animalType)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold">Sizes</h2>
            <ul className="flex flex-wrap md:flex-col">
              {sizes.map((x) => (
                <li key={x.size} className="mr-2 mb-2 md:mr-0 md:mb-0">
                  <Link
                    className={`${size === x.size && 'font-bold'}`}
                    href={getFilteredUrl({ s: x.size })}
                  >
                    {x.size}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold">Prices</h2>
            <ul>
              {/* {prices.map((price) => (
                <li key={price.title}>
                  <Link href={getFilteredUrl({ p: price.title })}>
                    <a
                      className={`${price === price.title ? 'font-bold' : ''}`}
                    >
                      {price.title}
                    </a>
                  </Link>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-3/4 w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.data.map((product) => (
          <ProductCard
            key={product.id}
            product={{ ...product, price: product.price.toString() }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
