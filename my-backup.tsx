import {
    getAllPrices,
    getAllProducts,
    getAllSizes,
    getAllTypes,
} from '@/lib/actions/product.actions';

import { Button } from '@/components/ui/button';
import GalleryCard from '@/components/shared/product/gallery-card';
import Link from 'next/link';
import React from 'react';

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
    const prices = await getAllPrices();
  
    return (
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="bg-white md:rounded-r-2xl mb-4 shadow-md border-r py-6 px-4 overflow-auto w-full md:w-64">
          {/* Mobile Sidebar */}
          <div className="md:hidden grid grid-cols-3 gap-4">
            <div>
              <h6 className="text-teal-800 text-center text-md font-semibold mb-2">
                Animal Type
              </h6>
              <ul className="space-y-1 text-center">
                <li>
                  <Link
                    className="text-slate-700 underline"
                    href={getFilteredUrl({ a: 'all' })}
                  >
                    Any
                  </Link>
                </li>
                {types.map((x) => (
                  <li key={x.animalType}>
                    <Link
                      href={getFilteredUrl({ a: x.animalType })}
                      className={`block text-slate-700 ${
                        animalType === x.animalType ? 'font-bold' : ''
                      }`}
                    >
                      {x.animalType}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h6 className="text-blue-600 text-md text-center font-semibold mb-2">
                Size
              </h6>
              <ul className="space-y-1">
                <li className="text-center">
                  <Link
                    className="text-slate-700 underline"
                    href={getFilteredUrl({ s: 'all' })}
                  >
                    Any size
                  </Link>
                </li>
                {sizes.map((x) => (
                  <li className="text-center" key={x.size}>
                    <Link
                      href={getFilteredUrl({ s: x.size })}
                      className={`block text-slate-700 ${
                        size === x.size ? 'font-bold' : ''
                      }`}
                    >
                      {x.size}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Desktop Sidebar */}
          <div className="hidden md:block">
            <ul>
              <li className="text-center">
                <Link href="/search">
                  <Button className="w-full">Clear Search</Button>
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <h6 className="text-teal-800 text-md text-center font-semibold">
                Animal Type
              </h6>
              <ul className="mt-2 space-y-1">
                <li className="text-center">
                  <Link
                    className="text-slate-700"
                    href={getFilteredUrl({ a: 'all' })}
                  >
                    Any
                  </Link>
                </li>
                {types.map((x) => (
                  <li className="text-center" key={x.animalType}>
                    <Link
                      href={getFilteredUrl({ a: x.animalType })}
                      className={`block text-slate-700 ${
                        animalType === x.animalType ? 'font-bold' : ''
                      }`}
                    >
                      {x.animalType}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h6 className="text-blue-600 text-md text-center font-semibold">
                Size
              </h6>
              <ul className="mt-2 space-y-1">
                <li className="text-center">
                  <Link
                    className="text-slate-700 underline"
                    href={getFilteredUrl({ s: 'all' })}
                  >
                    Any
                  </Link>
                </li>
                {sizes.map((x) => (
                  <li className="text-center" key={x.size}>
                    <Link
                      href={getFilteredUrl({ s: x.size })}
                      className={`block text-slate-700 ${
                        size === x.size ? 'font-bold' : ''
                      }`}
                    >
                      {x.size}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h6 className="text-blue-600 text-md text-center font-semibold">
                Prices
              </h6>
              <ul className="mt-2 space-y-1">
                {/* {prices.map((x) => (
                  <li key={x.price}>
                    <Link
                      href={getFilteredUrl({ p: x.price })}
                      className={`block text-slate-700 ${
                        price === x.price ? 'font-bold' : ''
                      }`}
                    >
                      {x.price}
                    </Link>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex-grow flex justify-center items-start mx-4 pb-8">
          <div className="p-8 border-teal-100 border-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white rounded-2xl shadow-lg w-full  content-start">
            {products.data.map((product) => (
              <GalleryCard
                key={product.id}
                product={{ ...product, price: product.price.toString() }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchPage;
  