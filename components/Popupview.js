"use client"
import React, { useState, useRef, useEffect } from 'react';

function Popupview() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleClickMaria = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={handleClickMaria}>
        Blog
      </button>
      {isOpen &&
       (
        <div className="absolute right-0 bottom-12 p-4" ref={popupRef}>
          <div className="max-w-md w-full bg-yellow shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold mb-1">DROGA SUPPORT</h2>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default Popupview;