import type { CartProduct } from '@/types/product';

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
    <div className="fixed right-0 h-[calc(100vh-85px)] min-w-[400px]">
      <div className="flex h-full flex-col border bg-white ">
        <div className="border">
          <div className="p-3">
            <div className="flex items-center justify-between">
              <p className="text-3xl">My Cart</p>
              <button type="button" onClick={onCloseModal}>
                Close
              </button>
            </div>
            <button type="button" onClick={onClear}>
              Remove All Items
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
            <button
              type="button"
              onClick={setIsPurchaseModalVisible}
              disabled={data.length < 1}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
