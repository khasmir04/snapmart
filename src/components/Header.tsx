import Link from 'next/link';
import type { Dispatch, SetStateAction } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export interface HeaderProps {
  title: string;
  SetIsCartOpen: Dispatch<SetStateAction<boolean>>;
  hasCart: boolean;
  totalQuantity: number;
}

const Header = (props: HeaderProps): JSX.Element => {
  const { title, SetIsCartOpen, hasCart, totalQuantity } = props;

  return (
    <header className="fixed top-0 z-10 w-full bg-green-600">
      <div className="container mx-auto bg-green-600 p-5 text-3xl text-white">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div>{title}</div>
          </Link>
          {hasCart && (
            <div>
              <button
                type="button"
                onClick={() => SetIsCartOpen(true)}
                className="flex items-center gap-2"
              >
                <AiOutlineShoppingCart />
                <div className="relative">
                  <span className="absolute -left-4 -top-7 rounded-full bg-white px-2 py-1 text-sm text-green-600">
                    {totalQuantity}
                  </span>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
