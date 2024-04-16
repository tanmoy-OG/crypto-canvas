import Image from "next/image";
import Link from "next/link";

import Carousal from "components/landing/carousal";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Carousal />
      <div className="mt-12 flex w-full">
        <div className="ml-8 h-10 basis-1/4">
          <div className=" my-10 h-96 rounded-lg bg-secondary"></div>
        </div>
        <div className="my-10 flex basis-3/4 flex-wrap justify-evenly gap-4 ">
          {[...Array(10)].map((_, i) => (
            <Link key={i} href={`/purchase/${i}`}>
              <Image
                alt=""
                className="my-2 aspect-square rounded-lg object-cover hover:scale-105 hover:transition-transform"
                height={200}
                src="/nepo.jpg"
                width={200}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
