// Code to render the components of the application
import './App.css';
import { lazy, Suspense } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
// import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
// import About from './pages/About';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Contact from './pages/Contact';
import News from './pages/News';
import Services from './pages/Services';
import Shop from './pages/Shop';
import SingleNews from './pages/SingleNews';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import ProductCategory from './pages/ProductCategory';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ToastContainer autoClose={2000} />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={user ? <Cart /> : <Navigate to='/login' />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<News />} />
            <Route path='/services' element={<Services />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='/singlenews' element={<SingleNews />} />
            <Route path='/productCategory/:name' element={<ProductCategory />} />
            <Route path='/login' element={<Login />} />
            <Route path='/userdetails' element={user ? <UserDetails /> : <Navigate to='/login' />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
