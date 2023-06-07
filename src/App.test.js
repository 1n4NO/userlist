import { render, screen } from '@testing-library/react';
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

test('shows loading', () => {
  render(<Provider store={store}>
    <App />
  </Provider>,)
  const linkElement = screen.getByText(/Loading!/);
  expect(linkElement).toBeInTheDocument()
});
