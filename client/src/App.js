
//components
import DetailView from './components/details/DetailView.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home';

import Cart from './components/cart/Cart.jsx';
import DataProvider from './context/DataProvider.jsx';

import { Box } from '@mui/material';

// to enable routing in your browser you have to import this.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop: 54}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<DetailView />} />
          <Route path = '/cart' element={<Cart />} />
        </Routes>
        </Box>
      </BrowserRouter> 
    </DataProvider>
  );
}

export default App;
