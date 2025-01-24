import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <div className="group relative p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <Image
        width={500}
        height={500}
        src={product.image}
        alt={product.title}
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product.title}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          <span className="font-medium">⭐</span>{" "}
          <span className="font-bold">{product.rating.rate}</span> (
          {product.rating.count})
        </p>
      </div>
      <p className="text-sm font-medium text-gray-900">${product.price}</p>
    </div>
  </div>
);
