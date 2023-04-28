import type { Dispatch, SetStateAction } from 'react';

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
            <button type="button" onClick={() => SetIsCartOpen(true)}>
              Cart
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
