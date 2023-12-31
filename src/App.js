import logo from './logo.svg';
import './App.css';
import Login from './Login/login';
import Products from './Product/product';
import Navbar from './Navbar/navbar';

import { BrowserRouter , Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div>
<BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;