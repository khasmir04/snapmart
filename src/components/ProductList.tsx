import { useRouter } from 'next/router';

import type { Product } from '@/data/mockData';

import ProductItem from './cards/ProductItem';

export interface ProductListProps {
  data: Product[];
  onClick: (value: string) => void;
}

const ProductList = (props: ProductListProps): JSX.Element => {
  const { data, onClick } = props;
  const router = useRouter();

  const { categoryId } = router.query;

  return (
    <div className="p-3">
      <p className="text-4xl">
        {categoryId?.toString().toUpperCase().replace('-', ' ')}
      </p>
      <div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryId === 'all-items'
            ? data.map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    data={product}
                    onClick={onClick}
                  />
                );
              })
            : data
                .filter((product) => {
                  return product.category === categoryId;
                })
                .map((product) => {
                  return (
                    <ProductItem
                      key={product.id}
                      data={product}
                      onClick={onClick}
                    />
                  );
                })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
