import Link from "next/link";
import { FC } from "react";
const NavBar: FC = () => {
  return (
    <nav className="flex w-full justify-between px-8 py-4">
      <div className="basis-1/4">
        <Link
          className="my-auto text-3xl font-bold italic text-primary"
          href=""
        >
          Crypto Canvas
        </Link>
      </div>
      <div className="flex basis-2/4 justify-center space-x-10">
        <Link className="my-auto" href="">
          Top Art
        </Link>
        <Link className="my-auto" href="">
          Top Artist
        </Link>
        <Link className="my-auto" href="">
          My NFT
        </Link>
        <Link className="my-auto" href="">
          Wishlist
        </Link>
        <div className="rounded-md bg-secondary px-6 py-2">Search</div>
      </div>
      <div className="flex basis-1/4 justify-end">
        <Link className="rounded-md bg-primary px-6 py-2" href="">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
