
//components
import Home from './Components/Home/Home';
import Signup from './Components/Account/Signup';
import Login from './Components/Account/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
