import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { productsList } from "../../../lib/data";

const ProductPerformanceTable = ({ sortBy }: { sortBy: string }) => {
    let products = productsList;

    if (sortBy === "leastSelling") {
        products = products.sort((a, b) => parseInt(a.quantitySold) - parseInt(b.quantitySold));
    }

    if (sortBy === "topSelling") {
        products = products.sort((a, b) => parseInt(b.quantitySold) - parseInt(a.quantitySold));
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[180px]">Product</TableHead>
                    <TableHead className="text-center whitespace-nowrap lg:hidden">Qty sold</TableHead>
                    <TableHead className="text-center whitespace-nowrap hidden lg:table-cell">
                        Quantity sold
                    </TableHead>
                    <TableHead>Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product, index) => {
                    const { productName, orderId, imageUrl, quantitySold, amount } = product;
                    return (
                        <TableRow key={index}>
                            <TableCell className="">
                                <div className="flex gap-1.5">
                                    <Image src={imageUrl} alt="headphone" width={40} height={40} />
                                    <div className="grid">
                                        <h4 className="text-sm font-normal">{productName}</h4>
                                        <p className="text-xs">{orderId}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">{quantitySold}</TableCell>
                            <TableCell>{amount}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default ProductPerformanceTable;
