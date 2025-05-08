"use client";

import { Table } from "@/components/ui/table";
import RejectedProductsTableHeader from "./RejectedProductsTableHeader";
import RejectedProductsTableBody from "./RejectedProductsTableBody";
import { StaticImageData } from "next/image";

const RejectedProductsTableDesktop = ({
    rejectedProducts,
}: {
    rejectedProducts: {
        productImage: StaticImageData;
        productName: string;
        status: string;
        amount: number;
        quantity: number;
        dateCreated: string;
    }[];
}) => {
    return (
        <Table className="hidden lg:table w-full border">
            <RejectedProductsTableHeader />
            <RejectedProductsTableBody rejectedProducts={rejectedProducts} />
        </Table>
    );
};
export default RejectedProductsTableDesktop;
