'use client';

import { useDispatch, useSelector } from 'react-redux';

import { setActiveLink } from '@/lib/services/activeLinkSlice';
import { RootState } from '@/lib/services/StoreProvider';

interface MenuItemProperties {
  item: {
    name: string;
    href: string;
  };
}

const MenuItem = ({ item }: MenuItemProperties) => {
  const dispatch = useDispatch();
  const activeLink = useSelector((state: RootState) => state.activeLink);
  return (
    <li
      className={`transition-all delay-150 ${
        activeLink === item.href
          ? 'duration-300 ease-in lg:relative left-full text-lg'
          : 'max-lg:hidden left-0'
      }`}
    >
      <a
        data-testid="menuItem"
        href={item.href}
        className={`cursor-pointer font-bold underline-offset-4 hover:underline hover:text-emerald-500 ${
          activeLink === item.href
            ? 'underline text-emerald-500'
            : 'text-emerald-700'
        }`}
        onClick={() => dispatch(setActiveLink(`${item.href}`))}
      >
        {item.name}
      </a>
    </li>
  );
};

export default MenuItem;
