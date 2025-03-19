import Image from 'next/image';

const ProductImages = ({ images }: { images: string[] }) => {
  return (
    <>
      <Image
        className="min-h-[300px]"
        src={images[0]}
        alt={images[0]}
        width={1000}
        height={1000}
      />
    </>
  );
};

export default ProductImages;
