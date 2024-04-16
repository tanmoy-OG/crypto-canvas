import Image from "next/image";

import { Card, CardContent } from "@/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table";

const invoices = [
  {
    id: "INV001",
    totalAmount: "250.00 ETH",
    commission: "10%",
  },
  {
    id: "INV002",
    totalAmount: "150.00 ETH",
  },
  {
    id: "INV003",
    totalAmount: "350.00 ETH",
  },
  {
    id: "INV004",
    totalAmount: "450.00 ETH",
    commission: "15%",
  },
  {
    id: "INV005",
    totalAmount: "550.00 ETH",
  },
  {
    id: "INV006",
    totalAmount: "200.00 ETH",
    commission: "12%",
  },
  {
    id: "INV007",
    totalAmount: "300.00 ETH",
  },
];

const MyNFT = () => {
  return (
    <main className="mt-12 flex min-h-screen flex-col items-center px-40">
      <Table>
        <TableCaption>A list of NFTs you own</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">NFT</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Commission to Artist</TableHead>
            <TableHead className="text-right">Current Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id} className="">
              <TableCell className="">
                <Card className="w-fit border-none p-0">
                  <CardContent className="p-0">
                    <Image
                      alt=""
                      className="my-2 aspect-square rounded-lg object-cover"
                      height={200}
                      src="/nepo.jpg"
                      width={200}
                    />
                  </CardContent>
                </Card>
              </TableCell>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.commission}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">2,250.00 ETH</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
};

export default MyNFT;
