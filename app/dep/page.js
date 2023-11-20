"use client"
import Link from "next/link";
import Droga from "public/image/Droga.jpg";
// import Loader from './Loader'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function Loader() {
  return (
    <div className="loader">
      Loading...
    </div>
  )
}
export default function dep() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  // const token = localStorage.getItem("token");
  // const [loading,setLoading]=useState(false);

  let token;
  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem('token');
  } else {
    // Handle the case when localStorage is not available
    token = null; // or any other default value
  }
  
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;axios.interceptors.response.use(
    response => response,
  
    error => {
  
      if(error.response.status === 401) {
  
        // refresh token 
  
        return refreshToken()
          .then(token => {
            localStorage.setItem("token", token);  
            return axios(error.config);
          });
  
      }
  
      return Promise.reject(error);
  
    }
  );
  
  const logger = console;

axios.interceptors.response.use(
  res => res, 
  err => {
    logger.log(err);
    if(err.response.status === 401) {
      // refresh token
    }
    return Promise.reject(err);
  }
);
  axios.interceptors.response.use(
    res => res,
    err => {
      console.log(err);
      if(err.response.status === 401) {
        // refresh token
      }
      return Promise.reject(err); 
    }
  )
// Add state variables
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const handleSignIn = async () => {

  try {

    setLoading(true);

    const response = await axios.post('http://127.0.0.1:8000/api/login/', {
      username, 
      password
    });

    setLoading(false);

    if(response.status === 200) {

      // save token, user

      router.push('/home');

    } else {
      throw new Error('Login failed');
    }

  } catch (err) {

    setLoading(false);
    let errorMessage;
    if(err.response){
    if(err.response.status === 400) {
      setError('Invalid credentials'); 
    } else {
      setError('Something went wrong');
    }

  } else{errorMessage='Network error';
}
setError(errorMessage);
}


};

// Add interceptor for token refresh
axios.interceptors.response.use(
  res => res,
  err => {
    if(err.response.status === 401) {
      // refresh token
    }
    return Promise.reject(err);
  }
);


// Display loading and errors
{loading && <Loader/>} 
{error && <p>{error}</p>}

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 h-4/5 overflow-hidden shadow-xl bg-white">

        <div className="flex flex-row items-center justify-center mt-3">
          <img
            src="/image/Droga.jpg"
            width={110}
            height={110}
            alt=""
          />
        </div>
        <div className="pt-4 flex space-x-1 justify-center">
          <div className="font- text-[30px] mb-1 flex justify-center text-black">
            <strong className="flex flex-col -space-x-3">Portal</strong>
          </div>
          <div className="font- text-[30px] mb-1 flex justify-center text-black">
            Login
          </div>
        </div>
        <div className="">
          <div className="px-16 py-3">
            <label>
              <span className="flex text-black px-4">ID
                </span></label>
          </div>
          <div className="px-20">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-black bg-white text-sm h-8 px-2"
              placeholder=""
              style={{ verticalAlign: "middle" }}
            />
          </div>
          <div className="px-16 pt-4">
            <label>
              <span className="flex text-black px-4">Password
                </span></label>
          </div>
          <div className="px-20">
            <input
              type="password" // Change the input type to "password" for password field
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black bg-white text-sm h-8 px-2"
              placeholder=""
              style={{ verticalAlign: "middle" }}
            />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button
            disabled={loading}
            id="signin"
            name="signin"
            className="bg-dro_yellow hover:bg-secondary text-black font-bold py-1 px-20"
            onClick={handleSignIn}
          >
            Sign in
          </button>

        </div>
        <div className="flex justify-center items-center py-7 text-xs">
          <button className="">
            Forgot Password?
            </button>
        </div>

      </div>
    </div>
  );
}
