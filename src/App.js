import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderConfirmed from './components/OrderConfirmed';
import PageNotFound from './components/PageNotFound'
import { Products } from './components/Products';
import { NewProducts } from './components/NewProducts';
import { FeaturedProducts } from './components/FeaturedProducts';
import { User } from './components/User';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/Auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
const LazyAbout = React.lazy(()=> import('./components/About'))
//a promise is returned by this dynamic import which is then converted into a module that contains default exported react component
function App() {
  return (<AuthProvider>
  <Navbar/>
    <Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path="/" element={<Home />} />
      <Route path="about" element={
          <React.Suspense fallback="Loading...">
            <LazyAbout />
          </React.Suspense>
      } />
      <Route path='/OrderConfirmed' element={<OrderConfirmed/>}/>
      <Route path='/products' element={<Products/>}>
        <Route path='featured' element={<FeaturedProducts/>}/>
        <Route path='new' element = {<NewProducts/>}/>
      </Route>
      <Route path='users' element={<User/>}>
        <Route path=':userId' element={<UserDetails/>}/>  {/*change from users/:userId to just :users */}
        <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='profile' element={ <RequireAuth> <Profile/></RequireAuth>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
  </AuthProvider>
  );
}

export default App;
