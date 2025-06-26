import React ,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './COMPONENT/Login';
import Signup from './COMPONENT/SignUp';
import HomePage from './COMPONENT/HomePage';
function App() {
   const [page, setPage] = useState('login');
  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
