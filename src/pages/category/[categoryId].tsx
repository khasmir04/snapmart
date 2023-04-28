import { useRouter } from 'next/router';
import { useState } from 'react';

import CartModal from '@/components/modal/CartModal';
import ProductList from '@/components/ProductList';
import SideBar from '@/components/Sidebar';
import { categories } from '@/data/categories';
import type { Product } from '@/data/mockData';
import { productsMock } from '@/data/mockData';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const CategoryPage = (): JSX.Element => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleClick = (value: string) => {
    console.log(value);
  };

  const handleOnAdd = (value: string) => {
    // Adjust the cart items
    console.log(value);
    setCartItems([...cartItems]);
  };

  const handleOnRemove = (value: string) => {
    // Adjust the cart items
    console.log(value);
    setCartItems([...cartItems]);
  };

  return (
    <Main
      meta={
        <Meta
          title={`${categoryId || ''} | ${AppConfig.site_name}`}
          description="E-commerce mockup website for SnapMart Interview"
        />
      }
      SetIsCartOpen={() => setIsVisible(!isVisible)}
    >
      <section className="mx-auto flex p-4 lg:container md:p-0">
        <SideBar categories={categories} />
        <ProductList data={productsMock} onClick={handleClick} />
        {isVisible && (
          <CartModal
            data={cartItems}
            onAdd={handleOnAdd}
            onRemove={handleOnRemove}
          />
        )}
      </section>
    </Main>
  );
};

export default CategoryPage;
