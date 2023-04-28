import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import type { Product } from '@/types/product';

import ProductItem from './cards/ProductItem';

export interface ProductListProps {
  data: Product[];
  onClick: (value: string) => void;
}

const ProductList = (props: ProductListProps): JSX.Element => {
  const { data, onClick } = props;
  const router = useRouter();

  const { categoryId } = router.query;

  const [filteredData, setFilteredData] = useState<Product[]>(data);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const query = searchInputRef?.current?.value.toLowerCase() ?? '';
    const filtered = data.filter((item) =>
      item.productName.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      if (searchInputRef.current) {
        searchInputRef.current.value = '';
        setFilteredData(data);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="flex-1 p-3">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-4xl">
          {categoryId?.toString().toUpperCase().replace('-', ' ')}
        </p>
        <div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search product..."
            ref={searchInputRef}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div>
        {filteredData.length === 0 && (
          <div className="flex h-96 items-center justify-center">
            <p className="text-2xl">No product found</p>
          </div>
        )}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryId === 'all-items'
            ? filteredData.map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    data={product}
                    onClick={onClick}
                  />
                );
              })
            : filteredData
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
