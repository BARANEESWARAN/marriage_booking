
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/Landing';
import Header from './Components/Header/Header';
import Login from './Components/LoginPage/Login';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home'  element={<Login/>}/>
    </Routes>
    </BrowserRouter>
 
   </div>
  );
}

export default App;
