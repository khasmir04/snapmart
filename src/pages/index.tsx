import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

import FeaturedItem from '@/components/cards/FeaturedItem';
import { productsMock } from '@/data/mockData';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { Product } from '@/types/product';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const data = productsMock;

  const getFirstFour = (products: Product[], type: string) => {
    return products.filter((item) => item.category === type).slice(0, 4);
  };

  const groceriesData = getFirstFour(data, 'groceries');

  const lifestyleData = getFirstFour(data, 'lifestyle');

  const toysData = getFirstFour(data, 'toys');

  const furnitureData = getFirstFour(data, 'furniture');

  const gadgetsData = getFirstFour(data, 'gadgets');

  const clothsData = getFirstFour(data, 'cloths');

  const automotiveData = getFirstFour(data, 'automotive');

  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.site_name}`}
          description="E-commerce mockup website for SnapMart Interview"
        />
      }
      setIsCartOpen={() => {}}
      hasCart={false}
    >
      <div className="container mx-auto max-w-[60%] py-3">
        <div className="my-8">
          <div className="flex items-center">
            <Link href="/category/all-items">
              <div className="flex items-center gap-3 rounded-lg border bg-green-500 p-4 text-2xl text-white shadow-lg hover:bg-green-300 hover:shadow-xl">
                Browse our products
                <AiOutlineArrowRight />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="mb-3 text-2xl font-bold">Featured Products</h1>
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="mb-2 bg-green-600 px-4 py-3 text-white">
                Groceries
              </h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {groceriesData?.map((item) => (
                  <div key={item.id}>
                    <FeaturedItem data={item} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 bg-green-600 px-4 py-3 text-white">
                Lifestyle
              </h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {lifestyleData?.map((item) => (
                  <div key={item.id}>
                    <FeaturedItem data={item} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 bg-green-600 px-4 py-3 text-white">Toys</h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {toysData?.map((item) => (
                  <div key={item.id}>
                    <FeaturedItem data={item} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 bg-green-600 px-4 py-3 text-white">
                Furniture
              </h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {furnitureData?.map((item) => (
                  <div key={item.id}>
                    <FeaturedItem data={item} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 bg-green-600 px-4 py-3 text-white">
                Gadgets
              </h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {gadgetsData?.map((item) => (
                  <div key={item.id}>
                    <FeaturedItem data={item} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 bg-green-600 px-4 py-3 text-white">Cloths</h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {clothsData?.map((item) => (
                  <div key={item.id}>
                    <FeaturedItem data={item} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 bg-green-600 px-4 py-3 text-white">
                Automotive
              </h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {automotiveData?.map((item) => (
                  <div key={item.id}>
                    <FeaturedItem data={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
