import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Eye, EyeIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

const GalleryCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-[300px] group relative space-y-4 overflow-hidden rounded-lg shadow-md hover:shadow-lg  transition-shadow">
        {/* Product Image */}
        <figure className="relative group-hover:opacity-90 transition-opacity">
          <Image
            className="aspect-square w-full object-cover p-2"
            src={product.images[0]}
            width={300}
            height={500}
            alt={product.name}
          />
        </figure>

        {/* Product Details */}
        <CardContent className="px-4 py-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">
                <Link href={`/products/${product.slug}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>
            <p className="bg-teal-300 text-lg rounded-2xl p-2 font-semibold text-black">
              ${product.price}
            </p>
          </div>
        </CardContent>
        <div className="flex justify-center items-center mt-2 border-t pt-2">
          <Link href={`/products/${product.slug}`}>
            <Button
              variant="ghost"
              className="bg-teal-200 w-full flex items-center justify-center"
            >
              <EyeIcon className="w-4 h-4" />
              View
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default GalleryCard;
