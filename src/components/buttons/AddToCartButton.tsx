export interface AddToCartButtonProps {
  title: string;
  onClick: (value: string) => void;
  id: string;
}

const AddToCartButton = (props: AddToCartButtonProps): JSX.Element => {
  const { title, onClick, id } = props;
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className="inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium uppercase text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {title}
    </button>
  );
};

export default AddToCartButton;
