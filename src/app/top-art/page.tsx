import Image from "next/image";
import Link from "next/link";

// import Carousal from "components/landing/carousal";

const TopArt = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="my-10 flex basis-3/4 flex-wrap justify-evenly gap-4 px-20">
        {[...Array(40)].map((_, i) => (
          <Link key={i} href={`/purchase/${i}`}>
            <Image
              alt=""
              className="my-2 rounded-lg"
              height={200}
              src="/nepo.jpg"
              width={200}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default TopArt;
