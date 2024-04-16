import Link from "next/link";
import { FC } from "react";

import Cart from "./cart";
import SignUp from "./sign-up";

const NavBar: FC = () => {
  return (
    <nav className="flex w-full justify-between px-8 py-4">
      <div className="basis-1/4">
        <Link
          className="my-auto text-3xl font-bold italic text-primary"
          href="/"
        >
          Crypto Canvas
        </Link>
      </div>
      <div className="flex basis-2/4 justify-center space-x-10">
        <Link className="my-auto" href="/top-art">
          Top Art
        </Link>
        <Link className="my-auto" href="/top-artist">
          Top Artist
        </Link>
        <Link className="my-auto" href="/my-nft">
          My NFT
        </Link>
        <Link className="my-auto" href="/my-wishlist">
          Wishlist
        </Link>
        <div className="rounded-md bg-secondary px-6 py-2">Search</div>
      </div>
      <div className="flex basis-1/4 justify-end gap-4">
        <Cart />
        <SignUp />
      </div>
    </nav>
  );
};

export default NavBar;
