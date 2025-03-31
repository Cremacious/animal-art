import AddToCart from '@/components/shared/product/add-to-cart';
import Image from 'next/image';
import NotFoundPage from '@/app/not-found';
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
    <section className="text-gray-600 container flex mx-auto border-teal-300 border-8 bg-white rounded-2xl">
      <div className="container px-5 py-24 mx-auto">
        <div className="mx-auto flex flex-col md:flex-row gap-2">
          <div className="w-full lg:w-1/2 flex flex-col">
            <Image
              className="object-contain bg-white rounded-2xl p-4 border-teal-300 border-8"
              alt={product.name}
              src={product.images[0]}
              width={300}
              height={300}
              style={{ maxHeight: '60vh', width: 'auto', height: 'auto' }}
            />
          </div>
          <div className="bg-white mt-2 p-4 rounded-2xl rounded-br-2xl lg:w-1/2 w-full">
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
            <div className="flex mt-6 items-center pb-5 border-t-2 pt-4 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Animal:</span>
                <div className="flex flex-row justify-evenly items-center">
                  <span className="title-font bg-teal-100 rounded-xl font-medium text-2xl p-2 text-gray-900">
                    ${Number(product.price)}
                  </span>
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
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
