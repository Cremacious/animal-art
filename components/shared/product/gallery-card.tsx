import AddToCart from './add-to-cart';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

const GalleryCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-teal-300 border-4 border-teal-100 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-2 w-full max-w-sm rounded-2xl overflow-hidden mx-auto mt-4 hover:scale-105 transition-transform cursor-pointer">
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            className="object-contain px-4 pt-4"
            fill
          />
        </div>
        <div className="p-6">
          <div className="text-lg text-center md:text-2xl text-slate-700 font-bold break-words">
            {product.name}
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-base text-md text-white font-bold flex-1">
              <Badge className="bg-teal-600 text-white font-bold text-2xl">
                ${product.price}
              </Badge>
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="bg-teal-100 border-8 border-teal-50 flex flex-col rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform h-auto self-start">
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            className="object-contain px-4 pt-4"
            fill
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex flex-row justify-between pb-2">
            <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
              {product.name}
            </h5>
            <h5 className="font-bold text-teal-600">${product.price}</h5>
          </div>
          <div className="flex justify-center">
            <Link href={`/products/${product.slug}`}>
              <Button className="bg-white hover:bg-white text-black">
                <EyeIcon className="mr-1" />
                View
              </Button>
            </Link>
          </div>
        </div>
      </div> */}
    </Link>
  );
};

export default GalleryCard;
