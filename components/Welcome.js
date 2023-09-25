"use client"
import React, { useState, useEffect, useRef } from "react";
import Popup from "reactjs-popup";
import quick from "/components/quick.css";

export default function Welcome() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  // const quickRef = useRef();

  const handleClickQ = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false)
        // Close the popup here
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={popupRef} className="flex flex-row">
      <div>
        <button className="font-semibold text-lg" onClick={handleClickQ}>
          Quick Links
        </button>
        {isOpen && (
          <div  className="fixed top-1/8 inset-0 bg-background/80 blur-background bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 backdrop-filter backdrop-blur-sm data-click-close">
            <div className="flex items-center justify-center h-full">
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
        )}
      </div>
    </div>
  );
}
