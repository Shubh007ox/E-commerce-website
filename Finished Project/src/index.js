import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AuthContextProvider } from './components/store/auth-context';
import CartProvider from './components/store/contextP';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>
  </AuthContextProvider>
);
