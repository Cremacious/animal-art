import HomepageHero from '@/components/homepage-hero';
import { getLatestProducts } from '@/lib/actions/product.actions';

// TODO: Add metadata to the page

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <div className="flex mx-20 bg-white justify-center rounded-xl">
        <HomepageHero />
      </div>
    </>
  );
};

export default Homepage;
