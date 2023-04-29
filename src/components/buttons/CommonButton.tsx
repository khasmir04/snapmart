import type { ButtonHTMLAttributes } from 'react';

export interface CommonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'success' | 'danger';
  title: string;
}

const CommonButton = (props: CommonButtonProps): JSX.Element => {
  const { variant, title, ...rest } = props;
  switch (variant) {
    case 'success':
      return (
        <button
          {...rest}
          type="button"
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 disabled:hover:bg-gray-500"
        >
          {title}
        </button>
      );
    case 'danger':
      return (
        <button
          {...rest}
          type="button"
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700  disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 disabled:hover:bg-gray-500"
        >
          {title}
        </button>
      );
    default:
      return (
        <button
          {...rest}
          type="button"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700  disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 disabled:hover:bg-gray-500"
        >
          {title}
        </button>
      );
  }
};

export default CommonButton;
