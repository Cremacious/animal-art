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
    <div className="flex">
      {/* Sidebar */}
      <nav className="bg-white ml-2 rounded-2xl shadow-md border-r h-auto fixed left-0 w-64 py-6 px-4 overflow-auto">
        <ul>
          <li>
            <a
              href="javascript:void(0)"
              className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
            >
              Search
            </a>
          </li>
        </ul>
        <div className="mt-4">
          <h6 className="text-blue-600 text-xs font-semibold px-4">
            Animal Type
          </h6>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Audience
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Posts
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Schedules
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Promote
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h6 className="text-blue-600 text-xs font-semibold px-4">Size</h6>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Earnings and taxes
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Refunds
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Declines
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-slate-700 font-medium text-sm block hover:text-slate-900 hover:bg-gray-100 rounded px-4 py-2 transition-all"
              >
                Payouts Details
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h6 className="text-blue-600 text-xs font-semibold px-4">Prices</h6>
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
        </div>
      </nav>

      {/* Main Content */}
      <div className="ml-64 flex-grow flex justify-center items-center">
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
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
