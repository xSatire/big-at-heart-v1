import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const Caro = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[75vw] max-w-xl"
    >
      <CarouselContent>
        <CarouselItem className="">
          {" "}
          <Image
            src="/future1.jpg"
            alt="volunteering Picture"
            width={1000}
            height={1000}
            className=" opacity-50 hover:brightness-50"
          />
        </CarouselItem>
        <CarouselItem className="">
          <Image
            src="/volunteering1.jpg"
            alt="volunteering Picture"
            width={1000}
            height={1000}
            className="opacity-50 hover:brightness-50"
          />
        </CarouselItem>
        <CarouselItem className="">
          {" "}
          <Image
            src="/volunteering2.jpg"
            alt="volunteering Picture"
            width={1000}
            height={1000}
            className="opacity-50 hover:brightness-50"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <Link href="/register" className="fancy absolute bottom-24 right-5">
        <span className="top-key"></span>
        <span className="text">Sign Up Now!</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </Link>
    </Carousel>
  );
};

export default Caro;
