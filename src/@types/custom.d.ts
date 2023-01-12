export interface IProductItem {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  description_rus?: string;
  table: string[][];
  price: number;
  images: string[];
}
