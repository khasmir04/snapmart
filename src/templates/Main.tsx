import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased">
    {props.meta}
    <main>{props.children}</main>
  </div>
);

export { Main };
