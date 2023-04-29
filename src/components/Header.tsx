import type { Dispatch, SetStateAction } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export interface HeaderProps {
  title: string;
  SetIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: HeaderProps): JSX.Element => {
  const { title, SetIsCartOpen } = props;

  return (
    <header className="fixed top-0 z-10 w-full bg-blue-700">
      <div className="container mx-auto bg-blue-700 p-5 text-3xl text-white">
        <div className="flex items-center justify-between">
          <div>{title}</div>
          <div>
            <button
              type="button"
              onClick={() => SetIsCartOpen(true)}
              className="flex items-center gap-2"
            >
              <AiOutlineShoppingCart /> <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
