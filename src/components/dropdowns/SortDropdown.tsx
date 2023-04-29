import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface SortDropdownProps {
  onChange: (value: string) => void;
}

type Option = {
  value: string;
  label: string;
};

const OPTIONS: Option[] = [
  { value: 'default', label: '--Select--' },
  { value: 'price-asc', label: 'Lowest Price First' },
  { value: 'price-desc', label: 'Highest Price First' },
  { value: 'name-asc', label: 'Alphabetical [A-Z]' },
  { value: 'name-desc', label: 'Alphabetical [Z-A]' },
];

const SortDropdown = (props: SortDropdownProps): JSX.Element => {
  const { onChange } = props;

  const [selectedValue, setSelectedValue] = useState<string>(OPTIONS[0]!.value);
  const router = useRouter();

  useEffect(() => {
    setSelectedValue(OPTIONS[0]!.value);
  }, [router]);

  return (
    <>
      <p>Sort: </p>
      <div className="relative flex w-full items-center">
        <select
          value={selectedValue}
          onChange={(e) => {
            onChange(e.target.value);
            setSelectedValue(e.target.value);
          }}
          className="w-full min-w-[150px] appearance-none rounded-md border-0 bg-white p-2 text-gray-500 shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          {OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SortDropdown;
