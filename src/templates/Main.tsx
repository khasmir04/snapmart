import type { Dispatch, ReactNode, SetStateAction } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  triggerCart: Dispatch<SetStateAction<boolean>>;
};

const Main = (props: IMainProps) => (
  <div className="antialiased">
    {props.meta}
    <Header
      triggerCart={props.triggerCart}
      title="SnapMart - Your one stop shop for all your needs "
    />
    <main className="bg-blue-100 pb-10">{props.children}</main>
    <Footer />
  </div>
);

export { Main };
