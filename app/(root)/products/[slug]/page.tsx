import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import AddToCart from '@/components/shared/product/add-to-cart';
import NotFoundPage from '@/app/not-found';
import ProductImages from '@/components/shared/product/product-images';
import { getMyCart } from '@/lib/actions/cart.actions';
import { getProductBySlug } from '@/lib/actions/product.actions';

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const cart = await getMyCart();

  if (!product) {
    return <NotFoundPage />;
  }

  //   <AddToCart
  //   cart={cart}
  //   item={{
  //     productId: product.id,
  //     name: product.name,
  //     slug: product.slug,
  //     price: product.price.toString(),
  //     quantity: 1,
  //     image: product.images![0],
  //   }}
  // />

  // <ProductImages images={product.images} />

  return (
    <div className="bg-blue-100 container mx-auto p-4 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Image */}
        <div>
          <ProductImages images={product.images} />
        </div>
        {/* Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">{product.name}</CardTitle>
              <CardDescription className="text-center">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="">
                <AddToCart
                  cart={cart}
                  item={{
                    productId: product.id,
                    name: product.name,
                    slug: product.slug,
                    price: product.price.toString(),
                    quantity: 1,
                    image: product.images![0],
                  }}
                />
              </div>
              <ul>
                <li>Price: {Number(product.price)}</li>
                <li>Stock: {product.stock}</li>
                <li>Size: {product.size}</li>
                <li>Other: {product.stock}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
