import NotFoundPage from '@/app/not-found';
import ProductImages from '@/components/shared/product/product-images';
import { getProductBySlug } from '@/lib/actions/product.actions';

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <NotFoundPage />;
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        <div className="col-span-2">{product.name}</div>
        <div className="col-span-1">{Number(product.price)}</div>
      </div>
    </>
  );
};

export default ProductPage;
