import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
   const [showCpassword, setShowCpassword] = useState(false);
  const [error, setError] = useState('');
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !email || !password || !cpassword) {
      setError('All fields are required');
      return;
    }

    if (!emailRef.current.checkValidity()) {
      setError('Invalid email format');
      return;
    }

    if (password !== cpassword) {
      setError('Passwords do not match');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    
    console.log('Existing users:', existingUsers);

    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
      setError('User with this email already exists. Please login or use a different email.');
      return;
    }

    // Add user and save
    existingUsers.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Account created successfully!');
    navigate('/login'); 
  };

  return (
    <div className="bg-white w-80 sm:w-[450px] h-[600px] p-8 flex flex-col gap-2 justify-center rounded-2xl shadow-2xl">
      <div className="flex justify-center items-center">
        <div className="bg-blue-800 w-[50px] h-[50px] rounded-2xl"></div>
      </div>
      <h2 className="text-2xl font-bold text-center">Create Account</h2>
      <h2 className="text-xl mb-4 text-center text-gray-500">Join Jobportal</h2>
      <label htmlFor="username" className="font-medium text-sm">Full Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded mb-2 text-sm"
      />
      <label htmlFor="email" className="font-medium text-sm">Email Address</label>
      <input
        type="email"
        placeholder="Enter your email"
        ref={emailRef}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded mb-2 text-sm"
        required
      />
      <div className="relative w-full">
      <label htmlFor="password" className="font-medium text-sm">Password</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded mb-2 text-sm"
      />
      <div
              className="absolute top-[35px] right-3 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div></div>
            <div className="relative w-full">
      <label htmlFor="cpassword" className="font-medium text-sm">Confirm Password</label>
      <input
        type={showCpassword ? "text" : "password"}
        placeholder="Confirm password"
        value={cpassword}
        onChange={(e) => setCpassword(e.target.value)}
        className="w-full p-2 border border-gray-200 rounded mb-2 text-sm"
      />
      <div
              className="absolute top-[35px] right-3 cursor-pointer text-gray-600"
              onClick={() => setShowCpassword(!showCpassword)}
            >
              {showCpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div></div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        onClick={handleSignup}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
      >
        Sign Up
      </button>

      <p className="text-sm mt-2 text-center">
        Already have an account?{' '}
        <span
          onClick={() => navigate('/')}
          className="text-blue-600 cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
}
