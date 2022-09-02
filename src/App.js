import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Admin from './admin/Admin';
import Create_store_staff from './components/create/Create_store_staff';
import  Create_store_vender  from './components/create/Create_store_vender';
import Create_user from './components/create/Create_user';

import Store_Register from './components/create/Store_Register';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Home from './Home';

function App() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Store_Register' element={ <Store_Register />} />
      <Route path='/Create_user'   element={<Create_user /> } />
      <Route path='/Create_store_staff' element={ <Create_store_staff />} />
      <Route path='/Create_store_vender' element={ <Create_store_vender />} />
      <Route  path='/admin' element={ <Admin /> } />
   

    </Routes>



  </>
  );
}

export default App;
