import type { Product } from '@/data/mockData';

export interface CartModalProps {
  data: Product[];
}

const CartModal = (props: CartModalProps): JSX.Element => {
  const { data } = props;
  return (
    <div className="fixed right-0 h-[calc(100vh-85px)] min-w-[300px]">
      <div className="flex h-full flex-col border bg-white ">
        <div className="border">
          <div className="p-3">
            <p className="text-3xl">My Cart</p>
            <button type="button">Remove All Items</button>
          </div>
        </div>
        <div className="flex-1 border">
          <div className="p-3">
            {data &&
              data.map((item) => {
                return (
                  <div key={item.id}>
                    <div>{item.productName}</div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="border">
          <div className="p-3">
            <p className="text-xl">Total Items: {data?.length || 0}</p>
            <p className="text-xl">Total Amount: {data?.length || 0}</p>
            <button type="button">Remove All Items</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
