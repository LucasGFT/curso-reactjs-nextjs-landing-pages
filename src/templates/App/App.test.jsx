import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-themes';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  // para fazer o test com o theme do style-component é preciso renderiza-lo com o provider
  // isso é feito na funcao renderTheme
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBg,
  });

  expect(headingContainer).toMatchSnapshot();

  expect(headingContainer).toHaveStyleRule(
    'background',
    theme.colors.secondaryBg,
  );
});
