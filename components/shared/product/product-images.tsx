'use client';

import Image from 'next/image';
import { useState } from 'react';

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Image
        className="min-h-[300px]"
        src={images[current]}
        alt={images[0]}
        width={1000}
        height={1000}
      />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <div key={index} onClick={() => setCurrent(index)}>
            <Image
              className=""
              src={image}
              alt={image}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductImages;
