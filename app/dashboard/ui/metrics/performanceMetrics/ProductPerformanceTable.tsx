"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import product1 from "@/public/images/dashboard/product-1.png";
import product2 from "@/public/images/dashboard/product-2.png";
import { useEffect, useState } from "react";

const ProductPerformanceTable = ({ sortBy }: { sortBy: string }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Skip rendering until the client has mounted

    let products = [
        {
            product: (
                <div className="flex gap-1.5">
                    <Image src={product1} alt="headphone" width={40} height={40} />
                    <div className="grid">
                        <h4 className="text-sm font-normal">Black Polo T-shirt</h4>
                        <p className="text-xs">Order ID -KG10001</p>
                    </div>
                </div>
            ),
            quantitySold: "15",
            amount: "₦240,000",
        },
        {
            product: (
                <div className="flex gap-1.5">
                    <Image src={product2} alt="headphone" width={40} height={40} />
                    <div className="grid">
                        <h4 className="text-sm font-normal">Black Polo T-shirt</h4>
                        <p className="text-xs">Order ID -KG10001</p>
                    </div>
                </div>
            ),
            quantitySold: "13",
            amount: "₦240,000",
        },
        {
            product: (
                <div className="flex gap-1.5">
                    <Image src={product1} alt="headphone" width={40} height={40} />
                    <div className="grid">
                        <h4 className="text-sm font-normal">Black Polo T-shirt</h4>
                        <p className="text-xs">Order ID -KG10001</p>
                    </div>
                </div>
            ),
            quantitySold: "12",
            amount: "₦240,000",
        },
        {
            product: (
                <div className="flex gap-1.5">
                    <Image src={product2} alt="headphone" width={40} height={40} />
                    <div className="grid">
                        <h4 className="text-sm font-normal">Black Polo T-shirt</h4>
                        <p className="text-xs">Order ID -KG10001</p>
                    </div>
                </div>
            ),
            quantitySold: "10",
            amount: "₦240,000",
        },
        {
            product: (
                <div className="flex gap-1.5">
                    <Image src={product1} alt="headphone" width={40} height={40} />
                    <div className="grid">
                        <h4 className="text-sm font-normal">Black Polo T-shirt</h4>
                        <p className="text-xs">Order ID -KG10001</p>
                    </div>
                </div>
            ),
            quantitySold: "6",
            amount: "₦240,000",
        },
    ];

    if (sortBy === "leastSelling") {
        products = products.sort((a, b) => parseInt(a.quantitySold) - parseInt(b.quantitySold));
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[180px]">Product</TableHead>
                    <TableHead className="text-center whitespace-nowrap">Qty sold</TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{product.product}</TableCell>
                        <TableCell className="text-center">{product.quantitySold}</TableCell>
                        <TableCell>{product.amount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ProductPerformanceTable;
