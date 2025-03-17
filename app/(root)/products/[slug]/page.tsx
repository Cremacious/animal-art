import NotFoundPage from '@/app/not-found';
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
      Page
      {product.name}
    </>
  );
};

export default ProductPage;
