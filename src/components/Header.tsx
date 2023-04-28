import type { Dispatch, SetStateAction } from 'react';

export interface HeaderProps {
  title: string;
  triggerCart: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: HeaderProps): JSX.Element => {
  const { title, triggerCart } = props;
  return (
    <header className="w-full bg-blue-700">
      <div className="container mx-auto bg-blue-700 p-5 text-3xl text-white">
        <div className="flex items-center justify-between">
          <div>{title}</div>
          <div>
            <button type="button" onClick={() => triggerCart(true)}>
              Cart
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
