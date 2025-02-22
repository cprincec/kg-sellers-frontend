import { StaticImageData } from "next/image";

/*********** ORDER DTO ***********/
export interface IOrderDTO {
  orderId: string;
  orderStatus: string;
  productImage: StaticImageData;
  productName: string;
  quantity: number;
  amount: string;
  paymentStatus: string;
  orderDate: string;
  deliveryDate: string;
  dateOfPurchase: string;
}
