"use client";
import { Heart, Share2, Flag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";
import { Button } from "@/ui/button";
// import { Card, CardContent } from "@/ui/card";

const Profile = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const [tab, setTab] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center px-20 py-10">
      <div className="mb-10 flex w-full justify-between">
        <div className="ml-4 flex basis-1/2 flex-col gap-4">
          <div className="flex gap-4">
            <Avatar className="size-20">
              <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col place-items-start gap-y-2">
              <h1 className="text-3xl font-semibold">Shibam Saha</h1>
              <h1 className="text-lg">@s4shibam</h1>
            </div>
          </div>
          <h1 className="font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            impedit asperiores reiciendis possimus! Laudantium alias fugiat
            illum in consequatur doloremque, est eaque ab quas? Eos voluptatibus
            pariatur non quisquam explicabo.
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <Button size="icon" variant="outline">
            <Heart className="size-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Share2 className="size-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Flag className="size-4" />
          </Button>
        </div>
      </div>
      <div className="mb-4 flex size-full justify-evenly gap-4">
        <Button
          className="w-full"
          size="lg"
          variant="outline"
          onClick={() => {
            setTab(0);
          }}
        >
          NFT Gallery
        </Button>
        <Button
          className="w-full"
          size="lg"
          variant="outline"
          onClick={() => {
            setTab(1);
          }}
        >
          Request Custom NFT
        </Button>
        <Button
          className="w-full"
          size="lg"
          variant="outline"
          onClick={() => {
            setTab(2);
          }}
        >
          Listed
        </Button>
      </div>
      <div className="mb-4 h-px w-full bg-secondary"></div>
      {tab === 0 && (
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
      )}
      {tab === 1 && (
        <div className="my-10 flex basis-3/4 flex-wrap justify-evenly gap-4 ">
          Shibam.... pls eta korene
        </div>
      )}
      {tab === 2 && (
        <div className="my-10 flex basis-3/4 flex-wrap justify-evenly gap-4 ">
          COMING SOON
        </div>
      )}
    </main>
  );
};

export default Profile;
