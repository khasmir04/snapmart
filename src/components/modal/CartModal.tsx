import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';

import type { CartProduct } from '@/types/product';

import CommonButton from '../buttons/CommonButton';
import CartItem from '../cards/CartItem';

export interface CartModalProps {
  data: CartProduct[];
  onAdd: (value: string) => void;
  onRemove: (value: string) => void;
  onClear: () => void;
  onCloseModal: () => void;
  setIsPurchaseModalVisible: () => void;
}

const CartModal = (props: CartModalProps): JSX.Element => {
  const {
    data,
    onAdd,
    onRemove,
    onClear,
    onCloseModal,
    setIsPurchaseModalVisible,
  } = props;
  return (
    <div className="fixed right-0 h-[calc(100vh-85px)] w-full bg-black/50">
      <div className="absolute right-0 flex h-full min-w-[400px] flex-col border  bg-white ">
        <div className="border">
          <div className="p-3">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-3xl">
                <AiOutlineShoppingCart />
                <span>Shopping Cart</span>
              </p>
              <button type="button" onClick={onCloseModal}>
                <AiOutlineClose
                  className="text-gray-500 hover:text-gray-900"
                  size={24}
                />
              </button>
            </div>
            <button
              type="button"
              onClick={onClear}
              disabled={data.length < 1}
              className="bg-transparent text-lg text-red-500 underline disabled:text-gray-500"
            >
              Remove all items
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-scroll border">
          <div className="p-3">
            {data &&
              data.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    data={item}
                    onAdd={onAdd}
                    onRemove={onRemove}
                  />
                );
              })}
          </div>
        </div>
        <div className="border">
          <div className="p-3">
            <p className="text-xl">
              Total Items:{' '}
              {data.reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.quantity,
                0
              ) || 0}
            </p>
            <p className="text-xl">
              Total Amount:{' '}
              {data
                .reduce(
                  (accumulator, currentValue) =>
                    accumulator +
                    currentValue.unitPrice * currentValue.quantity,
                  0
                )
                .toLocaleString()}
            </p>
            <CommonButton
              variant="success"
              title="Checkout"
              onClick={setIsPurchaseModalVisible}
              disabled={data.length < 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
