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
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <nav className="bg-white hidden md:block shadow-md border-r h-screen flex-shrink-0 min-w-[64] py-6 px-4 overflow-auto">
        <ul>
          <li>
            <a
              href="javascript:void(0)"
              className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
            >
              Dashboard
            </a>
          </li>
        </ul>
        <div className="mt-4">
          <h6 className="text-blue-600 text-xs font-semibold px-4">
            Animal Type
          </h6>
          <ul className="mt-2 space-y-1">
            <li className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all">
              <Link
                className="text-slate-700"
                href={getFilteredUrl({ a: 'all' })}
              >
                Any
              </Link>
            </li>
            {types.map((x) => (
              <li
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
                key={x.animalType}
              >
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
          <h6 className="text-blue-600 text-xs font-semibold px-4">Sizes</h6>
          <ul className="mt-2 space-y-1">
            <li className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all">
              <Link
                className="text-slate-700 underline"
                href={getFilteredUrl({ s: 'all' })}
              >
                Any
              </Link>
            </li>
            {sizes.map((x) => (
              <li className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all" key={x.size}>
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
        {/* <div className="mt-4">
          <h6 className="text-blue-600 text-xs font-semibold px-4">Actions</h6>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Logout
              </a>
            </li>
          </ul>
        </div> */}
      </nav>

      {/* Mobile Sidebar */}
      <div className="md:hidden absolute top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div>
            <h6 className="text-teal-800 text-center text-sm font-semibold mb-2">
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
            <h6 className="text-blue-600 text-sm text-center font-semibold mb-2">
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
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-start mx-4 pb-8 mt-54 md:mt-0 rounded-2xl p-8 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {products.data.length > 0 ? (
            products.data.map((product) => (
              <GalleryCard
                key={product.id}
                product={{ ...product, price: product.price.toString() }}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No products available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
