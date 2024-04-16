import Image from "next/image";
import Link from "next/link";

// import Carousal from "components/landing/carousal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/ui/button";

const list = [
  {
    rank: 1,
    name: "Shad",
    src: "https://github.com/shadcn.png",
    nft: 10,
  },
  {
    rank: 2,
    name: "souvikMondal",
    src: "https://github.com/shadcn.png",
    nft: 8,
  },
  {
    rank: 3,
    name: "Tanmoy_OG",
    src: "https://github.com/shadcn.png",
    nft: 6,
  },
  {
    rank: 4,
    name: "s4shibam",
    src: "https://github.com/shadcn.png",
    nft: 5,
  },
];

const TopArtist = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-10 px-20 py-10">
      <h1 className="text-3xl font-semibold">Top Artists</h1>
      {[...list].map((item) => (
        <Link
          key={item.rank}
          className="size-full"
          href={`/profile/${item.rank}`}
        >
          <Button
            className="flex size-full justify-between rounded-xl p-4"
            variant="secondary"
          >
            <div className="ml-4 flex basis-1/3 items-center gap-4">
              <Avatar className="size-20">
                <AvatarImage alt="@shadcn" src={item.src} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col place-items-start gap-y-2">
                <div className="flex justify-start gap-2">
                  <h1 className="text-2xl font-semibold">#{item.rank}</h1>
                  <h1 className="text-2xl font-semibold">{item.name}</h1>
                </div>
                <h1 className="font-light">{item.nft} NFTs</h1>
              </div>
            </div>
            <div className="flex basis-2/3 justify-end gap-4">
              {[...Array(6)].map((_, i) => (
                <Image
                  key={i}
                  alt=""
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/nepo.jpg"
                  width={100}
                />
              ))}
            </div>
          </Button>
        </Link>
      ))}
    </main>
  );
};

export default TopArtist;
