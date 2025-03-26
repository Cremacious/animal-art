import AddToCart from './add-to-cart';
import { Button } from '@/components/ui/button';
import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

const GalleryCard = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
        <div className="w-full p-4">
          <Image
            src={product.images[0]}
            alt="Product 1"
            className="w-full object-cover object-top aspect-[230/307]"
            width={300}
            height={300}
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex flex-row justify-evenly pb-2">
            <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
              {product.name}
            </h5>
            <h5 className="text-bold">${product.price}</h5>
          </div>
          <Link href={`/products/${product.slug}`}></Link>
          <Button variant="outline">View</Button>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
