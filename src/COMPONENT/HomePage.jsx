// import React from 'react';

// function HomePage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-100">
//       <h1 className="text-4xl font-bold">Welcome to the Home Page!</h1>
//     </div>
//   );
// }

// export default HomePage;

// import React,{useEffect,useState} from 'react';

// function HomePage() {
//   // const user = JSON.parse(localStorage.getItem('user'));
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const lastEmail = localStorage.getItem('loggedInEmail');
//     const loggedInUser = users.find(u => u.email === lastEmail);
//     setUser(loggedInUser);
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
//       <div className="text-center">
//         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
//           Welcome, {user?.username || 'User'}!
//         </h1>
//         <p className="mt-4 text-sm md:text-base text-gray-600">
//           You have successfully logged in.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default HomePage;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem('loggedInEmail');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!email) {
      // Not logged in
      navigate('/');
    } else {
      const foundUser = users.find(user => user.email === email);
      setUser(foundUser || { username: 'User' });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInEmail');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Welcome, {user?.username || 'User'}!
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          You have successfully logged in.
        </p>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
