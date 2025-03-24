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
  return (
    <div className="bg-blue-100 container mx-auto p-4 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Animal: {product.animalType} </p>
              <p>Size: {product.size} </p>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1">
          {product.stock > 0 && (
            <div className="flex flex-col">
              <Card>
                <CardHeader>
                  <CardTitle>In Stock</CardTitle>
                </CardHeader>
                <CardContent>
                  <h2 className="w-24 rounded-full bg-green-100 px-5 py-2 text-green-700">
                    ${Number(product.price)}{' '}
                  </h2>
                </CardContent>
                <CardFooter>
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
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
