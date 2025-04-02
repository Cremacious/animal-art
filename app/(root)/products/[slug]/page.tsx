import AddToCart from '@/components/shared/product/add-to-cart';
import { Badge } from '@/components/ui/badge';
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

  return (
    <div className="p-4">
      <section className="text-gray-700 container shadow-xl flex mx-auto border-white border-8 bg-teal-100 rounded-2xl">
        <div className="container px-5 py-8 mx-auto">
          <div className="mx-auto flex flex-col md:flex-row gap-2">
            <div className="w-full lg:w-1/2 flex flex-col">
              <Image
                className="object-contain bg-teal-100 rounded-2xl p-4"
                alt={product.name}
                src={product.images[0]}
                width={300}
                height={300}
                style={{ maxHeight: '60vh', width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="bg-white mt-2 p-6 rounded-2xl shadow-xl rounded-br-2xl lg:w-1/2 w-full">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>

              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-row gap-2 mt-2">
                <span className="mr-3">Animal: {product.animalType}</span>
                <span className="mr-3">Size: {product.size}</span>
              </div>

              <div className="flex mt-4 pt-4 border-t-2 flex-row justify-center gap-4 items-center">
                <Badge className="text-xl bg-teal-700">
                  ${Number(product.price)}
                </Badge>

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
    </div>
  );
};

export default ProductPage;
