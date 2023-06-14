import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import CartModal from '@/components/modal/CartModal';
import ProductList from '@/components/ProductList';
import SideBar from '@/components/Sidebar';
import { categories } from '@/data/categories';
import { productsMock } from '@/data/mockData';
import {
  addToCart,
  calculateTotal,
  clearCart,
  removeFromCart,
  setCart,
} from '@/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const CategoryPage = (): JSX.Element => {
  const router = useRouter();
  const { categoryId } = router.query;

  const { cartItems, totalAmount, totalQuantity } = useAppSelector(
    (store) => store.cart
  );
  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPurchaseModalVisible, setIsPurchaseModalVisible] =
    useState<boolean>(false);

  // TODO: Use State for products after fetching
  // TODO: Checking of index should be handled by state
  useEffect(() => {
    const storageItems = localStorage.getItem('cartItems');
    if (storageItems && storageItems.length > 0) {
      dispatch(setCart(JSON.parse(storageItems)));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    if (cartItems.length === 0) {
      localStorage.removeItem('cartItems');
    }
    dispatch(calculateTotal());
  }, [cartItems]);

  const handleClick = (value: string) => {
    const foundItem = productsMock.find((product) => product.id === value);
    if (foundItem) {
      dispatch(addToCart({ product: foundItem, quantity: 1 }));
    }
  };

  const handleOnAdd = (value: string) => {
    const foundCartItemIndex = cartItems.findIndex((item) => item.id === value);
    if (foundCartItemIndex !== -1) {
      const prevCartItems = [...cartItems];
      dispatch(
        addToCart({ product: prevCartItems[foundCartItemIndex], quantity: 1 })
      );
    }
  };

  const handleOnRemove = (value: string) => {
    const foundCartItemIndex = cartItems.findIndex((item) => item.id === value);
    if (foundCartItemIndex !== -1) {
      const prevCartItems = [...cartItems];
      dispatch(removeFromCart({ product: prevCartItems[foundCartItemIndex] }));
    }
  };

  const handleClear = () => {
    dispatch(clearCart());
    localStorage.removeItem('cartItems');
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
                      ${totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-semibold">Total Items:</span>
                    <span class="font-semibold text-red-500">
                      ${totalQuantity.toLocaleString()}
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
            handleClear();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          setIsPurchaseModalVisible(false);
        }
      });
    }
  }, [isPurchaseModalVisible]);

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
      totalQuantity={totalQuantity}
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
            totalAmount={totalAmount}
            totalQuantity={totalQuantity}
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
