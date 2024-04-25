import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Navbar/Home';
import Products from './Component/Items/Products';
import Cart from './Component/Items/Cart';
import { Provider } from 'react-redux';
import Store from './Store/Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
       {/* Wrap your Routes with Router */}
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Products' element={<Products/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
          </Routes>
       
      </Provider>
    </div>
  );
}

export default App;
