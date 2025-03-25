import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import ProductPrice from './product-price';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>{product.name}</h1>
          </CardTitle>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={200}
          />
        </CardHeader>
        <CardContent>
          {product.description}{' '}
          {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          <ProductPrice value={Number(product.price)} />
          <Link href={`/products/${product.slug}`}>
            <Button>View</Button>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
