import React from 'react';
import Popup from 'reactjs-popup';

   const Notification = () => {
     return (
        <div class=" inline-flex">
  <div class="absolute bottom-auto left-auto top-7 right-10 -translate-y-1/2 translate-x-1/2 inline-block  rotate-0 skew-x-0 skew-y-0 rounded-full bg-dro_red p-1.5 text-xs"></div>
  <div class="flex items-center justify-center rounded-lg px-8 py-6 text-center text-white dark:text-gray-200">
   <Popup trigger={
<button>
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="h-8 w-7">
      <path
        fill-rule="evenodd"
        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
        clip-rule="evenodd" />
    </svg>
    </button>
     }
    position= "bottom center"
    > 
    <div className=' hover:bg-dro_gray border-dro_black px-4 w-50 h-18 bg-dro_white py-4'>
      <button >
CEO has Posted a New blog
      </button>
    </div>
    </Popup>
  </div>
</div>
     );
   };

   export default Notification;