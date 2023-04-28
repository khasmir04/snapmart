import { useRouter } from 'next/router';
import { useState } from 'react';

import ProductList from '@/components/ProductList';
import SideBar from '@/components/Sidebar';
import { categories } from '@/data/categories';
import { productsMock } from '@/data/mockData';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const CategoryPage = (): JSX.Element => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = (value: string) => {
    console.log(value);
  };

  return (
    <Main
      meta={
        <Meta
          title={`${categoryId || ''} | ${AppConfig.site_name}`}
          description="E-commerce mockup website for SnapMart Interview"
        />
      }
      triggerCart={() => setIsVisible(!isVisible)}
    >
      <section className="mx-auto flex p-4 lg:container md:p-0">
        <SideBar categories={categories} />
        <ProductList data={productsMock} onClick={handleClick} />
        {isVisible && <div>Cart</div>}
      </section>
    </Main>
  );
};

export default CategoryPage;
