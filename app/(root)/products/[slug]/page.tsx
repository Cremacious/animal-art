import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import AddToCart from '@/components/shared/product/add-to-cart';
import Image from 'next/image';
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
    <section className="text-gray-600 body-font overflow-hidden bg-teal-100 container mx-auto rounded-2xl">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            alt={product.name}
            src={product.images[0]}
            width={500}
            height={500}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Animal:</span>
                {product.animalType}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size:</span>
                {product.size}
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${Number(product.price)}
              </span>
              {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button> */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
