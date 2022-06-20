import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DashBoard from './components/DashBoard';
import About from './components/About';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import Featured from './components/Featured';
import New from './components/New';
import Users from './components/Users';
import Admin from './components/Admin';
import UserDetails from './components/UserDetails';
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='about' element={<About />} />
        <Route path='ordersummary' element={<OrderSummary />} />
        <Route path='products' element={<Products />} >
          <Route path='featured-products' element={<Featured />} />
          <Route path='new-products' element={<New />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path='admin' element={<Admin />} />
          <Route path='users/1' element={<UserDetails/>} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App;
