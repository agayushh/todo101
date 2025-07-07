import React, { useState } from "react";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-transparent outline outline-1 outline-[#d1d5db] h-[50vh] w-[30vw] rounded-lg text-[#d1d5db] p-5 pt-16">
      <h1 className="text-4xl">Login</h1>
      <span className="mt-5 block">Sign up to continue</span>
      <div className="mt-20 flex flex-col space-y-11">
      
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-b-2 bg-transparent mt-4 w-full text-lg outline-none focus:border-[#818cf8]"
          />
        </div>
        <div>
          <label htmlFor="password" className="block">
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-b-2 bg-transparent mt-4 w-full text-lg outline-none focus:border-[#818cf8]"
          />
        </div>
       
      </div>
    </div>
  );
};

export default Login;
