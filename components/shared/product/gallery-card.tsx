import AddToCart from './add-to-cart';
import { Button } from '@/components/ui/button';
import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

const GalleryCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white flex flex-col rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform w-72">
      {/* Image Container */}
      <div className="w-full aspect-[4/3] relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          className="object-contain px-4 pt-4"
          fill
        />
      </div>
      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex flex-row justify-between pb-2">
          <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
            {product.name}
          </h5>
          <h5 className="font-bold text-teal-600">${product.price}</h5>
        </div>
        <div className="flex justify-center">
          <Link href={`/products/${product.slug}`}>
            <Button variant="outline">
              <EyeIcon className="mr-1" />
              View
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
