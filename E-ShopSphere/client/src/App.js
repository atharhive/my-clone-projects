import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@mui/material'

import ThemeContextProvider from './core/context/ThemeContext';

//components
import Header from './components/Header/Header';
import DetailView from './components/ItemDetails/DetailView';
import TemplateProvider from './core/templates/TemplateProvider';
import ContextProvider from './core/context/ContextProvider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <ThemeContextProvider>
      <TemplateProvider>
        <ContextProvider>
          <BrowserRouter>
            <Header />
            <Box style={{marginTop: 54}}>
              <Routes>
                <Route path= '/' element={<Home />} />
                <Route path= '/cart' element={<Cart />} />
                <Route path= '/product/:id' element={<DetailView />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </ContextProvider>
      </TemplateProvider>
    </ThemeContextProvider>
  );
}

export default App;
