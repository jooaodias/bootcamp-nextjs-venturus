import { render, screen } from '@testing-library/react';

import MainMenu from '../components/MainMenu';

describe('MainMenu', () => {
  test('create MainMenu component', () => {
    render(<MainMenu />);
    expect(screen.getByText('NextBlog')).toBeTruthy();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Add Post')).toBeTruthy();
  });
});
