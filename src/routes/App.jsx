import '../styles/components/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Checkout, Home, Information, NotFound, Payment, Success } from '../containers';

import Layout from '../components/Layout';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const paypalOptions = {
  'client-id':
    'AT3w_Zh5frhC_jPyTl7lj6C0VastCx4TB5r4uc4mHsob7VQdHTg-1Aue1puO8i-wE9IanYTQXTVK5Ref',
  currency: 'USD',
  intent: 'capture',
};

const App = () => {
  const initialState = useInitialState();

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/information" element={<Information />} />
              <Route path="/checkout/payment" element={<Payment />} />
              <Route path="/checkout/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </PayPalScriptProvider>
  );
};

export default App;
