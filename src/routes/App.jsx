import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Checkout, Home, Information, NotFound, Payment, Success } from '../containers';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/information" element={<Information />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
