import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import CartModal from '@/components/modal/CartModal';
import ProductList from '@/components/ProductList';
import SideBar from '@/components/Sidebar';
import { categories } from '@/data/categories';
import { productsMock } from '@/data/mockData';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { CartProduct } from '@/types/product';
import { AppConfig } from '@/utils/AppConfig';

const CategoryPage = (): JSX.Element => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  // TODO: Use State for products after fetching

  useEffect(() => {
    // Perform localStorage action
    const storageItems = localStorage.getItem('cartItems');
    if (storageItems) {
      setCartItems(JSON.parse(storageItems));
    }
  }, []);

  const handleClick = (value: string) => {
    // Adjust the cart items
    // Search from the productsMock
    const foundItem = productsMock.find((product) => product.id === value);

    // Search from the cartItems
    if (foundItem) {
      const foundCartItem = cartItems.find((item) => item.id === value);
      if (foundCartItem) {
        // Update the quantity
        const filteredItems = cartItems.filter(
          (item) => item.id !== foundCartItem.id
        );
        setCartItems([
          { ...foundCartItem, quantity: (foundCartItem.quantity += 1) },
          ...filteredItems,
        ]);
      } else {
        // Add the item
        setCartItems([{ ...foundItem, quantity: 1 }, ...cartItems]);
      }
      // Update the localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
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

  const handleClear = () => {
    // Adjust the cart items
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <Main
      meta={
        <Meta
          title={`${categoryId || 'Welcome'} | ${AppConfig.site_name}`}
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
            onClear={handleClear}
          />
        )}
      </section>
    </Main>
  );
};

export default CategoryPage;
