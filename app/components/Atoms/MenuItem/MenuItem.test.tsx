import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';

import { renderWithRedux } from '@/lib/utils/testUtils';

import MenuItem from './MenuItem';

describe('MenuItem', () => {
  const item = {
    name: 'About',
    href: '/#about',
  };

  it('The MenuItem rendered when other item is active', () => {
    renderWithRedux(<MenuItem item={item} />, {
      initialState: { activeLink: '/#projects' },
    });
    const menuItem = screen.getByTestId('menuItem');
    expect(menuItem.textContent).toBe('About');
    expect(menuItem).toHaveClass('text-emerald-700');
  });
});
