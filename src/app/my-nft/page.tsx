'use client';

import { ethers } from 'ethers';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Card, CardContent } from '@/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/ui/table';

const invoices = [
  {
    id: 'INV001',
    totalAmount: '250.00 ETH',
    commission: '10%'
  },
  {
    id: 'INV002',
    totalAmount: '150.00 ETH'
  },
  {
    id: 'INV003',
    totalAmount: '350.00 ETH'
  },
  {
    id: 'INV004',
    totalAmount: '450.00 ETH',
    commission: '15%'
  },
  {
    id: 'INV005',
    totalAmount: '550.00 ETH'
  },
  {
    id: 'INV006',
    totalAmount: '200.00 ETH',
    commission: '12%'
  },
  {
    id: 'INV007',
    totalAmount: '300.00 ETH'
  }
];

const MyNFT = ({ marketplace, nft, account }: any) => {
  console.log(invoices);
  const [loading, setLoading] = useState(true);
  const [purchases, setPurchases] = useState<any[]>([]);
  const loadPurchasedItems = async () => {
    // Fetch purchased items from marketplace by quering Offered events with the buyer set as the user
    const filter = marketplace.filters.Bought(
      null,
      null,
      null,
      null,
      null,
      account
    );
    const results = await marketplace.queryFilter(filter);
    //Fetch metadata of each nft and add that to listedItem object.
    const purchases = await Promise.all(
      results.map(async (i: any) => {
        // fetch arguments from each result
        i = i.args;
        // get uri url from nft contract
        const uri = await nft.tokenURI(i.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await fetch(uri);
        const metadata = await response.json();
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(i.itemId);
        // define listed item object
        const purchasedItem = {
          totalPrice,
          price: i.price,
          itemId: i.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        };
        return purchasedItem;
      })
    );
    setLoading(false);
    setPurchases(purchases);
  };

  useEffect(() => {
    loadPurchasedItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <main className='mt-12 flex min-h-screen flex-col items-center px-40'>
        <h2 className='text-center text-2xl'>Loading</h2>
      </main>
    );
  }

  if (purchases?.length === 0) {
    return (
      <main className='mt-12 flex min-h-screen flex-col items-center px-40'>
        <h2 className='text-center text-2xl'>No purchases</h2>
      </main>
    );
  }

  return (
    <main className='mt-12 flex min-h-screen flex-col items-center px-40'>
      <Table>
        <TableCaption>A list of NFTs you own</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=''>NFT</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Commission to Artist</TableHead>
            <TableHead className='text-right'>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchases?.map((item, idx) => (
            <TableRow key={idx} className=''>
              <TableCell className=''>
                <Card className='w-fit border-none p-0'>
                  <CardContent className='p-0'>
                    <Image
                      alt=''
                      className='my-2 aspect-square rounded-lg object-cover'
                      height={200}
                      src='/nepo.jpg'
                      width={200}
                    />
                  </CardContent>
                </Card>
              </TableCell>
              <TableCell className='font-medium'>CCV{idx}</TableCell>
              <TableCell>{idx * 0.15}%</TableCell>
              <TableCell className='text-right'>
                {ethers.utils.formatEther(item.totalPrice)} ETH
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className='text-right'>2,250.00 ETH</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
};

export default MyNFT;
