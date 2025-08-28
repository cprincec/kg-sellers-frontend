import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { IProductPerformance } from "../../lib/interface";

const ProductPerformanceTable = ({ data }: { data: IProductPerformance[] }) => {
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
                {data.map((product, index) => {
                    const { productName, sku, productUrl, qty, amount } = product;
                    return (
                        <TableRow key={index}>
                            <TableCell className="">
                                <div className="flex gap-1.5">
                                    <Image src={productUrl} alt="headphone" width={40} height={40} />
                                    <div className="grid">
                                        <h4 className="text-sm font-normal">{productName}</h4>
                                        <p className="text-xs">{sku}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">{qty}</TableCell>
                            <TableCell>₦{amount.toLocaleString()}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default ProductPerformanceTable;
