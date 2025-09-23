import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home  from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ViewMeal from './pages/ViewMeal'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import UserOrder from './pages/UserOrder'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUser from './pages/admin/AdminUser'
import AdminMeals from './pages/admin/AdminMeals'
import AdminRatings from './pages/admin/AdminRatings'
import AdminOrders from './pages/admin/AdminOrders'
import Meals from './pages/Meals';
import PrivateComponent from './components/PrivateComponent';

const App = () => {
  return (
    <Router>
    <div className='min-h-screen bg-white'>  
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/auth' element = {<PrivateComponent />}>
        <Route path='meal/:id' element = {<ViewMeal />} />
        <Route path='cart' element = {<Cart />} />
        <Route path='my-Profile' element = {<Profile />} />
        <Route path='my-orders' element = {<UserOrder />} />
        <Route path='admin' element = {<AdminDashboard />} />
        <Route path='admin/users' element = {<AdminUser />} />
        <Route path='admin/meals' element = {<AdminMeals />} />
        <Route path='admin/ratings' element = {<AdminRatings />} />
        <Route path='admin/orders' element = {<AdminOrders />} />
        </Route>
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/meals' element = {<Meals />} />

      </Routes>
      <Footer />
      <ToastContainer />
    </div>

    </Router>
  )
}

export default App
