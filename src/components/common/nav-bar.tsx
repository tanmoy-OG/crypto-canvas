import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { FC } from 'react';

import SignUp from './auth';
import Cart from './cart';

const NavBar: FC = () => {
  return (
    <nav className='flex w-full justify-between px-8 py-4'>
      <div className='basis-1/4'>
        <Link
          className='my-auto text-3xl font-bold italic text-primary'
          href='/'
        >
          Crypto Canvas
        </Link>
      </div>
      <div className='flex basis-2/4 justify-center space-x-10'>
        <Link className='my-auto' href='/top-art'>
          Top Art
        </Link>
        <Link className='my-auto' href='/top-artist'>
          Top Artist
        </Link>
        <Link className='my-auto' href='/my-nft'>
          My NFT
        </Link>
        <Link className='my-auto' href='/my-wishlist'>
          Wishlist
        </Link>
        <div className='rounded-md bg-secondary px-6 py-2'>Search</div>
      </div>
      <div className='flex basis-1/4 items-center justify-end gap-4'>
        <Cart />
        <SignedIn>
          <div className='rounded-full border-2 border-white p-0.5'>
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <SignUp />
        </SignedOut>
      </div>
    </nav>
  );
};

export default NavBar;
