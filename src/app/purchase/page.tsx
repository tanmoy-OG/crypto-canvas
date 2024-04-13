import { Heart, Share2 } from "lucide-react";
import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";

const Purchase = () => {
  return (
    <main className="mt-12 flex px-40">
      <Card className="size-fit basis-1/3 border-none p-0">
        <CardContent className="p-0">
          <Image
            alt=""
            className="rounded-lg"
            height={400}
            src="/nepo.jpg"
            width={400}
          />
        </CardContent>
      </Card>
      <div className="flex w-max basis-2/3 flex-col justify-evenly px-20">
        <h1 className="text-3xl font-semibold">NFT Title</h1>
        <h1 className="text-3xl font-semibold">#nft token</h1>
        <HoverCard>
          <HoverCardTrigger className="w-fit text-sm hover:cursor-pointer">
            by @tanmoy_OG
          </HoverCardTrigger>
          <HoverCardContent>
            This is where a snap of the user profile will show.
          </HoverCardContent>
        </HoverCard>
        <div className="my-4 flex justify-between">
          <div className="flex w-96 flex-col rounded-lg border-2 border-secondary p-4">
            <div className="flex justify-between">
              <h1 className="text-lg italic">Current Price</h1>
              <h1 className="basis-1/3 text-right text-lg italic leading-tight">
                Creator Commission
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-3xl font-semibold">0.0543 ETH</h1>
              <div className="flex flex-col justify-end">
                <h1 className="text-xl font-semibold">10%</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <Heart className="size-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Share2 className="size-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <Button variant="secondary">Purchase</Button>
          <Button variant="outline">Add to Cart</Button>
          <Button variant="outline">Make Offer</Button>
        </div>
      </div>
    </main>
  );
};

export default Purchase;
