import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
  const [isPurchaseModalVisible, setIsPurchaseModalVisible] =
    useState<boolean>(false);

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

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (isPurchaseModalVisible) {
      MySwal.fire({
        title: 'Do you wish to proceed?',
        text: 'Confirm Payment',
        icon: 'question',
        html: `
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <span class="font-semibold">Total Amount:</span>
              <span class="font-semibold text-red-500">
              &#8369;
                ${cartItems
                  .reduce(
                    (acc, item) => acc + item.unitPrice * item.quantity,
                    0
                  )
                  .toLocaleString()}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-semibold">Total Items:</span>
              <span class="font-semibold text-red-500">
                ${cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
          </div>

        `,
        confirmButtonText: 'OK',
        confirmButtonColor: '#80af46',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          MySwal.fire({
            title: 'Payment Successful!',
            text: 'Thank you for your purchase!',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#80af46',
            allowOutsideClick: false,
          }).then(() => {
            setIsPurchaseModalVisible(false);
            setCartItems([]);
            localStorage.removeItem('cartItems');
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          setIsPurchaseModalVisible(false);
        }
      });
    }
  }, [isPurchaseModalVisible]);

  const handleOnAdd = (value: string) => {
    const foundCartItemIndex = cartItems.findIndex((item) => item.id === value);
    if (foundCartItemIndex !== -1) {
      const prevCartItems = [...cartItems];
      prevCartItems[foundCartItemIndex]!.quantity += 1;
      setCartItems(prevCartItems);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  };

  const handleOnRemove = (value: string) => {
    // Adjust the cart items
    const foundCartItemIndex = cartItems.findIndex((item) => item.id === value);
    if (foundCartItemIndex !== -1) {
      const prevCartItems = [...cartItems];
      if (prevCartItems[foundCartItemIndex]!.quantity > 1) {
        prevCartItems[foundCartItemIndex]!.quantity -= 1;
        setCartItems(prevCartItems);
      } else {
        const filteredItems = prevCartItems.filter((item) => item.id !== value);
        setCartItems(filteredItems);
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
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
      setIsCartOpen={() => setIsVisible(!isVisible)}
      hasCart
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
            onCloseModal={() => setIsVisible(false)}
            setIsPurchaseModalVisible={() => setIsPurchaseModalVisible(true)}
          />
        )}
        {/* {isPurchaseModalVisible && (
          <PurchaseModal
            setIsPurchaseModalVisible={setIsPurchaseModalVisible}
          />
        )} */}
      </section>
    </Main>
  );
};

export default CategoryPage;
