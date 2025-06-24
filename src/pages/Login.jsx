
function Login(){

    return (
       <>
  <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
    {/* Username Field */}
    <div className="flex flex-col">
      <label htmlFor="username" className="mb-1 font-medium text-gray-700">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Enter your username"
        className="border border-gray-300 rounded px-3 py-2"
      />
    </div>

    {/* Email Field */}
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded px-3 py-2"
      />
    </div>

    {/* Password Field */}
    <div className="flex flex-col">
      <label htmlFor="password" className="mb-1 font-medium text-gray-700">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        className="border border-gray-300 rounded px-3 py-2"
      />
    </div>
  </div>
</>

    )
}

export default Login;
