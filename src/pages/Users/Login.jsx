import { useState } from "react";
import { logotp } from "../../assets";

const Login = () => {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., calling an API to authenticate the user)

    // For demo purposes, log the form data to the console
    console.log("Login Data:", { email, password });

    // Clear form fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mx-auto mt-0 rounded bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 m-auto max-w-6xl p-28">
        <div>
          <img src={logotp} className="w-[80%] h-auto" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin} className="max-w-md">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-semibold"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-semibold"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
