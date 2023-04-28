import { useRouter } from 'next/router';

import type { CategoryRoute } from '@/data/categories';

import CategoryButton from './buttons/CategoryButton';

export interface SideBarProps {
  categories: CategoryRoute[];
}

const SideBar = (props: SideBarProps): JSX.Element => {
  const { categories } = props;
  const router = useRouter();
  const { categoryId } = router.query;
  const formattedCategoryId = categoryId?.toString().replace('-', ' ');

  return (
    <aside className="hidden min-w-[250px] md:block">
      <ul className="p-5">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <CategoryButton
                title={category.title}
                url={`/category${category.url}`}
                isActive={
                  !!formattedCategoryId?.includes(category.title.toLowerCase())
                }
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
