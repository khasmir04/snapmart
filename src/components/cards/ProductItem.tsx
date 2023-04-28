import Image from 'next/image';

import type { Product } from '@/data/mockData';

import AddToCartButton from '../buttons/AddToCartButton';

export interface ProductItemProps {
  data: Product;
  onClick: (value: string) => void;
}

const ProductItem = (props: ProductItemProps): JSX.Element => {
  const { data, onClick } = props;

  return (
    <div className="flex">
      <div className="flex flex-col rounded-xl bg-white p-5 shadow-md">
        <div className="mb-6">
          <div className="relative h-[200px] w-full">
            <Image
              fill
              sizes="100px"
              style={{
                objectFit: 'cover',
              }}
              src={data.imageUrl}
              alt={data.productName}
            />
          </div>
        </div>
        <div className="flex h-full flex-col gap-3">
          {/* TODO: Use ellipsis */}
          <div>
            <p className="text-lg">{data.productName}</p>
            <p className="text-sm text-green-500">{data.category}</p>
            <p className="max-h-[70px] overflow-hidden">{data.description}</p>
          </div>
          <div className="mt-auto">
            <p className="mb-2 text-lg text-red-600">
              &#x20b1; {data.unitPrice.toLocaleString()}
            </p>
            <AddToCartButton
              id={data.id}
              onClick={onClick}
              title="Add To Cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
