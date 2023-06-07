import { render, screen } from '@testing-library/react';
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import 'isomorphic-fetch'

test('shows loading', () => {
  render(<Provider store={store}>
    <App />
  </Provider>,)
  const linkElement = screen.getByText(/Loading!/);
  expect(linkElement).toBeInTheDocument()
});

test('test fetch call', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const result = await res.json();
  expect(result.name).toBe('Leanne Graham');  // Success!
});
