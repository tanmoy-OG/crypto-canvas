import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/ui/button";

const Cart: FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            These are the best available prices!!
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-4 rounded-lg border-2 border-secondary p-4">
            <div className="flex gap-4">
              <Image
                alt=""
                className="my-2 aspect-square rounded-lg object-cover"
                height={100}
                src="/nepo.jpg"
                width={100}
              />
              <div className="m-auto flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-xs italic">Current Price</h1>
                  <h1 className="basis-1/3 text-right text-xs italic leading-tight">
                    Creator Commission
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-lg">0.0543 ETH</h1>
                  <div className="flex flex-col justify-end">
                    <h1 className="text-lg">10%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly gap-2">
              <Button className="text-xs" size="sm" variant="secondary">
                Purchase
              </Button>
              <Button className="text-xs" size="sm" variant="outline">
                Make Offer
              </Button>
              <Button className="text-xs" size="sm" variant="destructive">
                Remove
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border-2 border-secondary p-4">
            <div className="flex gap-4">
              <Image
                alt=""
                className="my-2 aspect-square rounded-lg object-cover"
                height={100}
                src="/nepo.jpg"
                width={100}
              />
              <div className="m-auto flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-xs italic">Current Price</h1>
                  <h1 className="basis-1/3 text-right text-xs italic leading-tight">
                    Creator Commission
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-lg">0.0543 ETH</h1>
                  <div className="flex flex-col justify-end">
                    <h1 className="text-lg">10%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly gap-2">
              <Button className="text-xs" size="sm" variant="secondary">
                Purchase
              </Button>
              <Button className="text-xs" size="sm" variant="outline">
                Make Offer
              </Button>
              <Button className="text-xs" size="sm" variant="destructive">
                Remove
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border-2 border-secondary p-4">
            <div className="flex gap-4">
              <Image
                alt=""
                className="my-2 aspect-square rounded-lg object-cover"
                height={100}
                src="/nepo.jpg"
                width={100}
              />
              <div className="m-auto flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-xs italic">Current Price</h1>
                  <h1 className="basis-1/3 text-right text-xs italic leading-tight">
                    Creator Commission
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-lg">0.0543 ETH</h1>
                  <div className="flex flex-col justify-end">
                    <h1 className="text-lg">10%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly gap-2">
              <Button className="text-xs" size="sm" variant="secondary">
                Purchase
              </Button>
              <Button className="text-xs" size="sm" variant="outline">
                Make Offer
              </Button>
              <Button className="text-xs" size="sm" variant="destructive">
                Remove
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border-2 border-secondary p-4">
            <div className="flex gap-4">
              <Image
                alt=""
                className="my-2 aspect-square rounded-lg object-cover"
                height={100}
                src="/nepo.jpg"
                width={100}
              />
              <div className="m-auto flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-xs italic">Current Price</h1>
                  <h1 className="basis-1/3 text-right text-xs italic leading-tight">
                    Creator Commission
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-lg">0.0543 ETH</h1>
                  <div className="flex flex-col justify-end">
                    <h1 className="text-lg">10%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly gap-2">
              <Button className="text-xs" size="sm" variant="secondary">
                Purchase
              </Button>
              <Button className="text-xs" size="sm" variant="outline">
                Make Offer
              </Button>
              <Button className="text-xs" size="sm" variant="destructive">
                Remove
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border-2 border-secondary p-4">
            <div className="flex gap-4">
              <Image
                alt=""
                className="my-2 aspect-square rounded-lg object-cover"
                height={100}
                src="/nepo.jpg"
                width={100}
              />
              <div className="m-auto flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-xs italic">Current Price</h1>
                  <h1 className="basis-1/3 text-right text-xs italic leading-tight">
                    Creator Commission
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-lg">0.0543 ETH</h1>
                  <div className="flex flex-col justify-end">
                    <h1 className="text-lg">10%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly gap-2">
              <Button className="text-xs" size="sm" variant="secondary">
                Purchase
              </Button>
              <Button className="text-xs" size="sm" variant="outline">
                Make Offer
              </Button>
              <Button className="text-xs" size="sm" variant="destructive">
                Remove
              </Button>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild className="w-full">
            <Button type="submit">Purchase All</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
