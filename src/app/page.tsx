import Image from "next/image";

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
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
          <Image
            alt=""
            className="my-2 rounded-lg"
            height={200}
            src="/nepo.jpg"
            width={200}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
