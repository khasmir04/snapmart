import type { Dispatch, ReactNode, SetStateAction } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  SetIsCartOpen: Dispatch<SetStateAction<boolean>>;
};

const Main = (props: IMainProps) => (
  <div className="antialiased">
    {props.meta}
    <Header
      SetIsCartOpen={props.SetIsCartOpen}
      title="SnapMart - Your one stop shop for all your needs "
    />
    <main className="mt-[85px] min-h-[calc(100vh-85px)] bg-gray-200 pb-10">
      {props.children}
    </main>
    <Footer />
  </div>
);

export { Main };
