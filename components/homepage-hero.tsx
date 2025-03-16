import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import image1 from '@/public/images/sample-products/p1-1.jpg';
import image2 from '@/public/images/sample-products/p2-1.jpg';
import image3 from '@/public/images/sample-products/p3-1.jpg';
import image4 from '@/public/images/sample-products/p4-1.jpg';

const HomepageHero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1">
            <div className="flex flex-col gap-4 lg:gap-8">
              <h1 className="max-w-[80%] text-4xl leading-tight font-semibold text-gray-900 lg:text-5xl xl:text-7xl">
                Animal Art by Heather
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 xl:text-2xl">
                Shop beautiful watercolor animal portraits, or have a custom
                work be commissioned.
              </p>
            </div>
            <div className="my-6 lg:my-10">
              <Button asChild size="lg">
                Shop Paintings
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex -space-x-6">
                {/* {testimonial.avatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className={`relative z-${
                      index + 1
                    }0 flex h-12 w-12 flex-shrink-0 rounded-full border-2 border-white object-cover`}
                  >
                    <AvatarImage src={avatar.image} alt="" />
                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                  </Avatar>
                ))} */}
              </div>
              <div>
                <p className="mb-1 text-sm text-gray-500 italic">
                  &quot;Heather painted my dog so well, I look at it more than
                  my actual dog.&quot;
                </p>
                <p className="text-sm font-medium text-gray-500">
                  George M, Customer
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex-1">
            <div className="w-full max-w-[50rem]">
              <AspectRatio ratio={1 / 1} className="h-full w-full">
                <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-[3.5%]">
                  <div className="overflow-hidden rounded-[5.2%] border border-gray-300 bg-gray-200">
                    <Image
                      src={image1}
                      alt=""
                      className="object-cover h-full w-full object-center"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-gray-300 bg-gray-200">
                    <div className="absolute top-1/2 left-[5%] w-[110%] max-w-[25rem] -translate-y-1/2 overflow-hidden rounded-md">
                      <AspectRatio ratio={1.739130435 / 1}>
                        <Image
                          src={image2}
                          alt=""
                          className="object-cover h-full w-full object-center"
                          width={500}
                          height={500}
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-gray-300 bg-gray-200">
                    <div className="absolute top-[9%] left-[9%] w-[200%] max-w-[37.5rem] overflow-hidden rounded-md">
                      <AspectRatio ratio={1.6 / 1}>
                        <Image
                          src={image3}
                          alt=""
                          className="object-cover h-full w-full object-center"
                          width={500}
                          height={500}
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-gray-300 bg-gray-200">
                    <div className="relative top-[12%] left-[50%] w-[70%] max-w-[17.5rem] -translate-x-[50%]">
                      <AspectRatio ratio={0.52 / 1}>
                        {/* <Image
                          src="https://shadcnblocks.com/images/block/mockups/phone-1.png"
                          alt=""
                          className="absolute z-20 w-full"
                          width={500}
                          height={500}
                        /> */}
                        {/* <img
                          src={image4}
                          alt=""
                          className="absolute z-10 w-full rounded-[16%]"
                        /> */}
                      </AspectRatio>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
