import Caro from "@/components/caro";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <h1 className="head_text text-center">
        Support & Volunteer
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Big At Heart</span>
      </h1>
      <p className="desc text-center">
        VOLUNASIA is that moment when you forget you're volunteering to help
        change lives, because it's changing yours.
      </p>
      <div className="relative mt-16 mb-16">
        <Caro />
      </div>
    </section>
  );
};

export default page;
