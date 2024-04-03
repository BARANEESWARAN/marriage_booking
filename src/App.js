
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './Components/LandingPage/Landing';
import Header from './Components/Header/Header';
import Login from './Components/LoginPage/Login';
import AdminDashBoard from './Components/AdminDashBoard/AdminDashBoard';

function App() {
  return (
   <div>
    <BrowserRouter>

    <Routes>
    <Route path='/'  element={<LandingPage/>}/>
    <Route path='/login'  element={<Login/>}/>
     
     <Route path='/admindashboard'  element={<AdminDashBoard/>}/>
    </Routes>
    </BrowserRouter>
 
   </div>
  );
}

export default App;
