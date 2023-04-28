import type { CartProduct } from '@/types/product';

export interface CartItemProps {
  data: CartProduct;
  onAdd: (value: string) => void;
  onRemove: (value: string) => void;
}

const CartItem = (props: CartItemProps): JSX.Element => {
  const { data, onAdd, onRemove } = props;
  return (
    <div className="flex py-6">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={data.imageUrl}
          alt={data.productName}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              {/* TODO: Link to product page */}
              {data.productName}
            </h3>
            <p className="ml-4">
              {(data.unitPrice * data.quantity).toLocaleString()}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{data.category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {data.quantity.toLocaleString()}</p>
          <div className="flex">
            <button
              type="button"
              className="border px-3 py-1 font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => onAdd(data.id)}
            >
              <span className="text-xl text-blue-600">&#43;</span>
            </button>
            <button
              type="button"
              className="border px-3 py-1 font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => onRemove(data.id)}
            >
              <span className="text-xl text-blue-600">&minus;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
