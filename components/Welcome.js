"use client"
import { useState, useEffect, useRef } from "react";
import Popup from "reactjs-popup";
import Cookies from "js-cookie";
import { useHistory } from 'react-router-dom';

export default function Welcome() {
  const [user, setUser] = useState(null);
  // const[handleEdit,sethandleEdit]=useState();
  const [isOpen, setIsOpen] = useState(false);
  const blurRef = useRef(null);
  // const cardRef = useRef(null);

    // const history = useHistory();
  
    const handleEdit = (id) => {
      // Navigate to the edit page with the record ID as a URL parameter
      history.push(`/edit/${id}`);
    };
  
    const handleDelete = (id) => {
      axios.delete(`http://localhost:8000/api/records/${id}/`)
        .then(response => {
          console.log('Record deleted successfully!');
          // Perform any necessary UI updates after successful deletion
        })
        .catch(error => console.error(error));
    };

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

  // const handleOutsideClick = (event) => {
  //   if (cardRef.current && !cardRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  const popupRef = useRef(null);

  useEffect(() => {

    const user = Cookies.get("user");
    
    if (user !== undefined) {
      try {
        setUser(JSON.parse(user));
      } catch (error) {
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
       
        
<div className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background backdrop-filter z-20" ref={blurRef}>
<div className="fixed top-1/2 md: transform -translate-x-1/2 -translate-y-1/2 max-w-xs w-11/12 md:max-w-xl md:w-auto"> 
 <div className="bg-dro_white shadow-lg rounded-lg  h-screen w-screen ">
    <div className="p-8 h-full">
      <div className="h-full overflow-x-auto overflow-y-auto">
        <table className="border-collapse border-spacing-0">
          <thead className="sticky top-0 bg-dro_white border" >
            <tr >
              <th className="border text-left px-3 py-3 md:px-6 md:py-1">No.</th>
              <th className="border text-left px-3 py-3 md:px-6 md:py-1">Name</th>
              <th className="border text-left px-3 py-3 md:px-6 md:py-1">Internal Network</th>
              <th className="border text-left px-3 py-3 md:px-6 md:py-1">External Network</th>
              <th className="border text-left px-3 py-3 md:px-6 md:py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">1</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">PMS (Performance management system)</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <a href="https://pms.drogapharma.com/" target="_blank" rel="noopener noreferrer">
                  https://pms.drogapharma.com/
                </a>
              </td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://pms.drogapharma.com/" target="_blank" rel="noopener noreferrer">
                  https://pms.drogapharma.com/
                </a></td>
                <td className="border px-3 py-3 md:px-6 md:py-1">
  <div>
    <button onClick={() => handleDelete(record.id)}>Delete</button>
  </div>
  <div>
    <button onClick={() => handleEdit(record.id)}>Edit</button>
  </div>
</td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">2</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">ODOO ERP</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://drogaerp.odoo.com/web" target="_blank" rel="noopener noreferrer">
              https://drogaerp.odoo.com/web
                </a></td>
                <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://drogaerp.odoo.com/web" target="_blank" rel="noopener noreferrer">
              https://drogaerp.odoo.com/web
                </a></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">3</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Email (Droga Pharma)</td>
              {/* <td className="border px-3 py-3 md:px-6 md:py-1"> */}
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://10.10.10.9/owa/" target="_blank" rel="noopener noreferrer">
              https://10.10.10.9/owa/
                </a></td>
                <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://10.10.10.9/owa/" target="_blank" rel="noopener noreferrer">
              https://10.10.10.9/owa/
                </a></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">4</td>
              <td className="border px-3 py-3 md:px-6 md:py-1"> Email (Ema Ethiopia)</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://10.10.10.9/owa/" target="_blank" rel="noopener noreferrer">
              https://10.10.10.9/owa/
                </a></td>
                <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href=" https://mail.drogapharma.com/owa/" target="_blank" rel="noopener noreferrer">
              https://mail.drogapharma.com/owa/
                </a></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">5</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Property Management</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="http://10.10.10.10:8069/" target="_blank" rel="noopener noreferrer">
              http://10.10.10.10:8069/
                </a></td>
                <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="http://10.10.10.10:8069/" target="_blank" rel="noopener noreferrer">
              http://10.10.10.10:8069/
                </a></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">6</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Attendance Management system</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="http://10.10.10.10:8073/" target="_blank" rel="noopener noreferrer">
              http://10.10.10.10:8073/
                </a></td>
                <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="http://10.10.10.10:8073/" target="_blank" rel="noopener noreferrer">
              http://10.10.10.10:8073/
                </a></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">7</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Network/System monitoring</td>
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">8</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Droga webite</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="http://drogapharma.com/" target="_blank" rel="noopener noreferrer">
              http://drogapharma.com/
                </a></td>
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">9</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Ema Website</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://emaethiopia.com/" target="_blank" rel="noopener noreferrer">
              https://emaethiopia.com/
                </a></td>
              {/* <td className="border px-3 py-3 md:px-6 md:py-1">https://emaethiopia.com/</td> */}
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">10</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Trust Website</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href=" https://trustethiopharma.com/" target="_blank" rel="noopener noreferrer">
              https://trustethiopharma.com/
                </a></td>
              {/* <td className="border px-3 py-3 md:px-6 md:py-1">https://trustethiopharma.com/</td> */}
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>   <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">11</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Droga Som website</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://drogapharma-som.com/" target="_blank" rel="noopener noreferrer">
              https://drogapharma-som.com/
                </a></td>
              {/* <td className="border px-3 py-3 md:px-6 md:py-1">https://drogapharma-som.com/</td> */}
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>   <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">12</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Risegmbh Website</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://risegmbh.de/" target="_blank" rel="noopener noreferrer">
              https://risegmbh.de/
                </a></td>
              {/* <td className="border px-3 py-3 md:px-6 md:py-1">https://risegmbh.de/</td> */}
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>   
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">13</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Droga Physiotherapy</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">https://drogaphysiotherapy.com/</td>
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">14</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Droga Pharmacy</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://drogapharmacy.com/" target="_blank" rel="noopener noreferrer">
              https://drogapharmacy.com/
                </a></td>
              {/* <td className="border px-3 py-3 md:px-6 md:py-1">https://drogapharmacy.com/</td> */}
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">15</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Odoo Staging</td>
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">16</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">AD Audit</td>
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">17</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">Droga SIEM</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://10.10.20.16:5601/" target="_blank" rel="noopener noreferrer">
              https://10.10.20.16:5601/
                </a></td>
              {/* <td className="border px-3 py-3 md:px-6 md:py-1">https://10.10.20.16:5601</td> */}
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr> <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">18</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">DMS</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="https://dms.drogapharma.com/" target="_blank" rel="noopener noreferrer">
              https://dms.drogapharma.com/
                </a></td>
              {/* <td className="border px-3 py-3 md:px-6 md:py-1">https://dms.drogapharma.com</td> */}
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr> <tr>
              <td className="border px-3 py-3 md:px-6 md:py-1">19</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">CheckMK</td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
              <a href="http://10.10.20.16/netsec/" target="_blank" rel="noopener noreferrer">
              http://10.10.20.16/netsec/
                </a></td>
              {/* <td className="border px-3 py-3 md:px-6 md:py-1">http://10.10.20.16/netsec/</td> */}
              <td className="border px-3 py-3 md:px-6 md:py-1"></td>
              <td className="border px-3 py-3 md:px-6 md:py-1">
                <div>
                  <button className="mb-2">Delete</button>
                </div>
                <div>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
            {/* Rest of the table rows */}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  </div>
</div>

      )}
    </div>
  );
}             {/* <div>
<button  className="font-semibold text-lg" onClick={handleClickM}>
Blog
</button>
    {isOpen &&
     (
      
      <div className="fixed inset-x-0 flex items-center justify-center top-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background  backdrop-filter z-10" ref={popupRef}>
      <div ref={cardRef} className="h-1/2 w-1/2 bg-dro_yellow shadow-lg">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl px-10 py-6 font-bold animate-bounce">Blog Here</h2>
          <div className="relative">
<div className="card py-6 px-16">
  <label htmlFor="image-upload" className="upload-button bg-dro_white px-8 py-1">
    Choose Image
    <input
      id="image-upload"
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="hidden"
    />
  </label>
  {selectedImage && (
    <img
      className="absolute top-2 right-2"
      src={selectedImage}
      alt="Selected"
      style={{ maxWidth:'40px' }}
    />
  )}
          </div>
          </div>
        </div>
        <div>
          <div className="px-10 py-3 h-52 w-full">
            <div className="px-10 h-11 w-full">
              <textarea
                id="title"
                className="h-10 w-full border py-3 border-dro_gray px-3 text-md text-dro_black resize-none"
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="px-10 h-52 w-full">
              <textarea
                id="content"
                className=" h-full w-full border border-dro_gray px-3 text-md text-dro_black resize-none"
                placeholder="Write Your Blog Here"
              ></textarea>
              <div className="flex justify-center items-center">
                <button className="flex justify-center items-center px-10 w-32 h-10 bg-dro_green text-white"  onClick={handlePostBlog}>
                  POST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
    }
</div> */}
     {/* <div className="">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                  className=" w-14 sm:w-32 h-5 sm:h-10 placeholder:text-dro_black  border border-dro_black text-dro_black text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                />
              </div> */}
                  {/* <div className="flex flex-row mr-24 ml-3 items-center justify-center">
          <Image src={log} height={20} width={20}/>
          <button className="hover:bg-dro_gray font-medium py-1 px-3">
            Log Out
          </button>
          </div> */}
