// "use client"
// import Link from "next/link";
// import Droga from "public/image/Droga.jpg";
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import Circle from "@/components/Circle";
// // import { Loader } from './Loader';
// export function Loader() {
//  return (
//    <div className="loader">
//      Loading...
//    </div>
//  )
// }

// function ChildComponent(props) {
//  return <h1>Hello, {props.name}</h1>;
// }

// export default function dep() {
//  const [username, setUsername] = useState('');
//  const [password, setPassword] = useState('');
 
//  const router = useRouter();
 
//  const [loading, setLoading] = useState(false);
//  const [error, setError] = useState('');

//  const handleSignIn = async () => {
//   try {
//     setLoading(true);
//     const response = await axios.post('http://127.0.0.1:8000/api/login/', {
//       username,
//       password
//     });
//     setLoading(false);
//     if(response.status === 200) {
//       localStorage.setItem('token', response.data.token);
//       axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
//       localStorage.setItem('username', response.data.user.username);
//       localStorage.setItem('email', response.data.user.email);
//       localStorage.setItem('role', response.data.user.role); 
//       if (response.data.user.username) {
//         setUsername(response.data.user.username);
//       } else {
//         console.error('Username is undefineded');
//         // handle the error
//       }
//       router.push('/home');
//     } else {
//       throw new Error('Login failed');
//     }
//   } catch (err) {
//     setLoading(false);
//     if (err.response && err.response.status === 401) {
//       setError('Username or password is incorrect');
//     } else {
//       console.error('Error logging in', err);
//       setError('An error occurred during login');
//     }
//   }
// };
 

//  {loading && <Loader/>} 
//  {error && <p>{error}</p>}
 
//  return (
//    <div className="flex h-1/2 mt-44 items-center justify-center">
//      <div className="w-96 h-4/5 overflow-hidden shadow-xl bg-white">
//        <ChildComponent name={username} />
//         <div className="flex flex-row items-center justify-center mt-3">
//           <img
//             src="/image/Droga.jpg"
//             width={110}
//             height={110}
//             alt=""
//           />
//         </div>
//         <div className="pt-4 flex space-x-1 justify-center">
//           <div className="font- text-[30px] mb-1 flex justify-center text-black">
//             <strong className="flex flex-col -space-x-3">Portal</strong>
//           </div>
//           <div className="font- text-[30px] mb-1 flex justify-center text-black">
//             Login
//           </div>

//         </div>
//         <div className="">
//           <div className="px-16 py-3">
//             <label>
//               <span className="flex text-black px-4">ID
//                 </span></label>
//           </div>
//           <div className="px-20">
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="border border-black bg-white text-sm h-8 px-2"
//               placeholder=""
//               style={{ verticalAlign: "middle" }}
//             />
//           </div>
//           <div className="px-16 pt-4">
//             <label>
//               <span className="flex text-black px-4">Password
//                 </span></label>
//           </div>
//           <div className="px-20">
//             <input
//               type="password" // Change the input type to "password" for password field
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="border border-black bg-white text-sm h-8 px-2"
//               placeholder=""
//               style={{ verticalAlign: "middle" }}
//             />
//           </div>
//         </div>
      
//         <div className="flex justify-center pt-8">
//           <button
//             disabled={loading}
//             id="signin"
//             name="signin"
//             className="bg-dro_yellow hover:bg-secondary text-black font-bold py-1 px-20"
//             onClick={handleSignIn}
//           >
//             Sign in
//           </button>
//            </div>
           
//   {error && <p className="flex justify-center items-center py-3 text-dro_red ">{error}</p>}
       
//         <div className="flex justify-center items-center py-6 text-xs">
//           <button className="">
//             Forgot Password?
//             </button>
//         </div>
//         {/* <Circle username={username} /> */}
//       </div>
//     </div>
//   );
// }
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dep() {
 const [notifications, setNotifications] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
 fetchNotifications();
 }, []);

 useEffect(() => {
 console.log('Notifications:', notifications);
 }, [notifications]);

 const fetchNotifications = async () => {
 try {
  const response = await axios.get(' http://127.0.0.1:8000/api1/notifications/');
  setNotifications(response.data);
  setLoading(false);
 } catch (error) {
  console.error('Failed to fetch notifications', error);
  setLoading(false);
 }
 };

 if (loading) {
 return <div>Loading...</div>;
 }

 return (
  <div className="hover:bg-dro_gray text-xl border-dro_black px-4 w-50 h-18 bg-dro_white py-4">
  {notifications.length > 0 ? (
    notifications
      .reverse()
      .map((notification) => (
        <div key={notification.id}>
          <h2>{notification.text}</h2>
          {/* <p>{notification.post}</p> */}
        </div>
      ))
  ) : (
    <p>You don't have any notifications</p>
  )}
</div>
 );
}

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const NOTIFICATIONS_URL = ' http://127.0.0.1:8000/api1/notifications/';

// export default function App() {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     fetchNotifications();
//   },[notifications]);

//   const fetchNotifications = async () => {
//     try {
//       const response = await axios.get(NOTIFICATIONS_URL);
//       setNotifications([...response.data]); 
//     } catch (error) {
//       console.error('Error fetching notifications', error);
//     }
//   };

//   return (
//     <div key="container">
//       <h1>Notifications</h1>
      
//       <pre>{JSON.stringify(notifications)}</pre>
      
      
//       {notifications.map(notification => (
//         <div key={notification.id}>
//           {notification.title} 
//         </div>  
//       ))}
     
      
//     </div>
//   );
// }