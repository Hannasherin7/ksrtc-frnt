import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { View } from './components/View';
import { Addbus } from './components/Addbus';
import { Searchbus } from './components/Searchbus';
import { Viewbus } from './components/Viewbus';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={(<Login/>)}/>
      <Route path='/sig'element={(<Signup/>)}/>
      <Route path='/vs'element={(<View/>)}/>
      <Route path='/ad'element={(<Addbus/>)}/>
      <Route path='/s'element={(<Searchbus/>)}/>
      <Route path='/v'element={(<Viewbus/>)}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
