import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/register" />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </BrowserRouter>

    // <div className="App">
    //   <Register />
    // </div>
  );
}

export default App;
