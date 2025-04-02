import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import dog1 from '@/public/images/art/dog1.jpg';
import hippo from '@/public/images/art/hippo.jpg';
import profileImage from '@/public/images/profile.jpg';
import raccoon from '@/public/images/art/raccoon.jpg';
import seahorse from '@/public/images/art/seahorse.jpg';

const HomepageHero = () => {
  return (
    <div className="p-8 flex flex-col items-center gap-8 md:flex-row">
      <div className="flex-1">
        <div className="flex flex-col items-center gap-4 lg:gap-8 justify-center">
          <Image
            src={profileImage}
            alt="Heather Dreadful"
            className="rounded-full"
            height={300}
            width={300}
          />
          <h1 className="max-w-[80%] text-center text-4xl leading-tight font-semibold text-gray-900 lg:text-5xl xl:text-7xl">
            Animal Art by Heather
          </h1>
          <p className="text-lg text-center leading-relaxed text-gray-600 xl:text-2xl">
            Shop beautiful watercolor animal portraits, or have a custom work be
            commissioned.
          </p>
        </div>
        <div className="my-6 lg:my-10">
          <Button asChild size="lg">
            Shop Paintings
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex -space-x-6">

          </div>
          <div>
            <p className="mb-1 text-center text-sm text-gray-500 italic">
              &quot;Heather painted my dog so well, I look at it more than my
              actual dog.&quot;
            </p>
            <p className="text-sm font-medium text-gray-500">
              George M, Customer
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex-1">
        <div className="w-full max-w-[50rem]">
          <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-[3.5%]">
            <Image
              src={dog1}
              alt=""
              className="object-cover h-full w-full object-center"
              width={500}
              height={500}
            />

            <Image
              src={hippo}
              alt=""
              className="object-cover h-full w-full object-center"
              width={500}
              height={500}
            />

            <Image
              src={seahorse}
              alt=""
              className="object-cover h-full w-full object-center"
              width={500}
              height={500}
            />
            <Image
              src={raccoon}
              alt=""
              className="object-cover h-full w-full object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
