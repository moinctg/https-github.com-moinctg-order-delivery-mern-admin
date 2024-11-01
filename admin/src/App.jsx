import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import OrderSummary from './pages/OrderSummary/OrderSummary';
import DailyOrderList from './pages/DailyOrder/DailyOrderList';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = 'https://order-delivery-mern-backend-1.onrender.com';
  // const url = 'http://localhost:8000';

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/orders' element={<Orders url={url}/>} />
          <Route path='/daily-order' element={<DailyOrderList url={url}/>} />
          <Route path='/order-summary' element={<OrderSummary url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
