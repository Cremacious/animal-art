import HomepageHero from '@/components/homepage-hero';
import { getLatestProducts } from '@/lib/actions/product.actions';

// TODO: Add metadata to the page

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <div className="bg-white rounded-2xl flex justify-center items-center w-sm md:w-7xl mx-auto">
        <HomepageHero />
      </div>
    </>
  );
};

export default Homepage;
