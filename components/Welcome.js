"use client"
import { useState, useEffect, useRef } from "react";
import Popup from "reactjs-popup";
import blur from "/components/blur.css";
import Cookies from "js-cookie";

export default function Welcome() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const blurRef = useRef(null);
  const cardRef = useRef(null);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const popupRef = useRef(null);

  useEffect(() => {
    // const user = Cookies.get("user");
    // if (user !== undefined) {
    //   setUser(JSON.parse(user));
    // }

    const user = Cookies.get("user");
    // console.log("User value:", user);
    if (user !== undefined) {
      try {
        setUser(JSON.parse(user));
      } catch (error) {
        // Handle the case where the value is not valid JSON
        console.error("Invalid JSON:", error);
      }
    }


    const handleOutsideClick = (event) => {
      if (blurRef.current && event.target === blurRef.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <button className="font-semibold text-lg" onClick={handleClickM}>
        Quick Links
      </button>
      {isOpen && (
        <div
          className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background  backdrop-filter z-20"
          ref={blurRef}
        >
          <div
            ref={cardRef}
            className="fixed top-1/8 inset-0 bg-background/80 blur-background bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 backdrop-filter backdrop-blur-sm data-click-close"
          >
            <div className="flex items-center justify-center h-full">
              <button className="absolute right-1/3 top-16 bg-dro_white px-4 flex justify-start items-start" onClick={handleToggle}>
              X
            </button>
              <table className="shadow-lg border-collapse border-spacing-0 bg-dro_white">
                
                <thead>
                
                  <tr className="">
                    <th className="border text-left px-6 py-4">No.</th>
                    <th className="border text-left px-6 py-4">Name</th>
                    <th className="border text-left px-6 py-4">Internal Network</th>
                    <th className="border text-left px-6 py-4">External Network</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-8 py-4 h-3">1</td>
                    <td className="border px-8 py-4 h-3">PMS</td>
                    <td className="border px-8 py-4 h-3">www.pms.com</td>
                    <td className="border px-8 py-4 h-3">https//:drogapharma.com</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4 h-3">1</td>
                    <td className="border px-8 py-4 h-3">PMS</td>
                    <td className="border px-8 py-4 h-3">www.pms.com</td>
                    <td className="border px-8 py-4 h-3">https//:drogapharma.com</td>
                  </tr>
                  
                  <tr>
                    <td className="border px-8 py-4">2</td>
                    <td className="border px-8 py-4">DMS</td>
                    <td className="border px-8 py-4">www.dms.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4">3</td>
                    <td className="border px-8 py-4">Odoo</td>
                    <td className="border px-8 py-4">erp.odoo.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4">4</td>
                    <td className="border px-8 py-4">Odoo</td>
                    <td className="border px-8 py-4">erp.odoo.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4">5</td>
                    <td className="border px-8 py-4">Odoo</td>
                    <td className="border px-8 py-4">erp.odoo.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4">6</td>
                    <td className="border px-8 py-4">Odoo</td>
                    <td className="border px-8 py-4">erp.odoo.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4">7</td>
                    <td className="border px-8 py-4">Odoo</td>
                    <td className="border px-8 py-4">erp.odoo.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4">8</td>
                    <td className="border px-8 py-4">Odoo</td>
                    <td className="border px-8 py-4">erp.odoo.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4">9</td>
                    <td className="border px-8 py-4">Odoo</td>
                    <td className="border px-8 py-4">erp.odoo.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4">10</td>
                    <td className="border px-8 py-4">Odoo</td>
                    <td className="border px-8 py-4">erp.odoo.com</td>
                    <td className="border px-8 py-4">https//:drogapharma.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
