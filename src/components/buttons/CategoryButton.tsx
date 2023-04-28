import classNames from 'classnames';
import Link from 'next/link';

export interface CategoryButtonProps {
  title: string;
  url: string;
  isActive?: boolean;
}

const CategoryButton = (props: CategoryButtonProps): JSX.Element => {
  const { title, url, isActive } = props;

  return (
    <Link
      href={url}
      className={classNames('w-full block p-2', {
        'bg-blue-500 font-bold text-white': isActive,
      })}
    >
      {title}
    </Link>
  );
};

export default CategoryButton;
