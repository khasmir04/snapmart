export const categories = [
  {
    id: '1',
    title: 'All items',
    url: '/all-items',
  },
  {
    id: '2',
    title: 'Groceries',
    url: '/groceries',
  },
  {
    id: '3',
    title: 'Lifestyle',
    url: '/lifestyle',
  },
  {
    id: '4',
    title: 'Toys',
    url: '/toys',
  },
  {
    id: '5',
    title: 'Furniture',
    url: '/furniture',
  },
  {
    id: '6',
    title: 'Gadgets',
    url: '/gadgets',
  },
  {
    id: '7',
    title: 'Cloths',
    url: '/cloths',
  },
  {
    id: '8',
    title: 'Automotive',
    url: '/automotive',
  },
];

export interface CategoryRoute {
  id: string;
  title: string;
  url: string;
}
