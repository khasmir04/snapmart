import type { Dispatch, ReactNode, SetStateAction } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
};

const Main = (props: IMainProps) => {

  return (
    <div className="antialiased">
      {props.meta}
      <Header
        SetIsCartOpen={props.setIsCartOpen}
        title="SnapMart"
      />
      <main className="mt-[85px] min-h-[calc(100vh-85px)] bg-gray-200 pb-10">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export { Main };
