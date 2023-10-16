"use client"
import Link from "next/link";
import Droga from "public/image/Droga.jpg";
import Image from "next/image";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useClient } from 'react';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"


export default function dep() {
  const [username, setUsername]= useState('');    
  const [password, setPassword] = useState('');
  const router = useRouter()

  // const handleSignIn = async () => {
  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/api/login/' , {
  //       username,
  //       password,
  //     });

  //     console.log(response.data);

  //     if (response.status ===200) {

  //       Cookies.set("user", JSON.stringify(response.data.user))

  //       router.push("/home")
        
  //     } else {
        
  //     }
  //     // Handle the response
  //   } catch (error) {
  //     // Handle any errors
  //   }
  // };


  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });
  
      if (response.status === 200) {
        const token = response.data.token; // Extract the authentication token from the response
        localStorage.setItem("token", token); // Store the token in local storage
        console.log("Authentication token:", token);
        // You can also store other user-related data if needed
        const user = response.data.user;
        localStorage.setItem("user", JSON.stringify(user));
  
        router.push("/home");
      } else {
        // Handle unsuccessful login
      }
    } catch (error) {
      // Handle any errors
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 h-4/5 overflow-hidden shadow-xl bg-white">
        
        <div className="flex flex-row items-center justify-center mt-3">
          <Image
            src={Droga}
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
              type="text"
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
