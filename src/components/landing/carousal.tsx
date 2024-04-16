"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { FC } from "react";

import { Card, CardContent } from "@/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";

// import slide_image from "@/assets/nepo.jpg";

const Carousal: FC = () => {
  return (
    <div className="flex w-full justify-center">
      <Carousel
        className="mt-12 w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-8">
                <Card className="border-none p-0">
                  <CardContent className="p-0">
                    <Image
                      alt=""
                      className="my-2 aspect-square rounded-lg object-cover"
                      height={400}
                      src="/nepo.jpg"
                      width={400}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-none bg-primary" />
        <CarouselNext className="border-none bg-primary" />
      </Carousel>
    </div>
  );
};

export default Carousal;
