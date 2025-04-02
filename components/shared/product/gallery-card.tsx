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
      <div className="bg-white border-4 border-teal-200 shadow-xl p-2 w-full max-w-sm rounded-2xl overflow-hidden mx-auto mt-4 hover:scale-105 transition-transform cursor-pointer">
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
          <div className="mt-8 flex justify-center items-center">
            <span className="bg-teal-600 text-white font-bold text-lg px-4 py-2 rounded">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
