import Image from 'next/image';

import type { Product } from '@/types/product';

export interface FeaturedItemProps {
  data: Product;
}

const FeaturedItem = (props: FeaturedItemProps): JSX.Element => {
  const { data } = props;

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
            <p className="text-lg font-bold">{data.productName}</p>
            <p className="text-sm text-green-500">{data.category}</p>
            <p className="max-h-[70px] overflow-hidden">{data.description}</p>
          </div>
          <div className="mt-auto">
            <p className="mb-2 text-lg text-red-600">
              &#x20b1; {data.unitPrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
