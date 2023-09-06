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

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api-auth/login/', {
        username,
        password,
      });

      console.log(response.data);

      if (response.status ===200) {

        Cookies.set("user", JSON.stringify(response.data.user))

        router.push("/home")
        
      } else {
        
      }
      // Handle the response
    } catch (error) {
      // Handle any errors
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 h-4/5 overflow-hidden shadow-2xl bg-white border border-black">
        
        <div className="flex flex-row items-center justify-center mt-10">
          <Image
            src={Droga}
            width={120}
            height={120}
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
          <div className=" px-14 pt-3 ">
            <label className="flex text-black">ID</label>
          </div>
          <div className="px-20 pt-3 pb-1">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-black bg-white scale-x-125 scale-y-125"
              placeholder=""
            />
          </div>
          <div className="px-14 pt-3 pb-2">
            <label className="text-black">Password</label>
          </div>
          <div className="flex justify-center scale-x-125 scale-y-125">
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black bg-white"
              placeholder=""
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
      </div>
    </div>
  );
}
