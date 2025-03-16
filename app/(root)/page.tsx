import HomepageHero from '@/components/homepage-hero';
import { getLatestProducts } from '@/lib/actions/product.action';

// TODO: Add metadata to the page

const Homepage = async () => {
  const latestProducts = await getLatestProducts();



  return (
    <>
      <HomepageHero />
    </>
  );
};

export default Homepage;
