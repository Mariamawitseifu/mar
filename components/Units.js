'use client'
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Popup from "reactjs-popup";
import Cookies from "js-cookie";

export default function Units() {
  const [userr, setUserr] = useState(null);
  const [qLinks, setQLinks] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeen, setIsOpeen] = useState(false);
  const blurRef = useRef(null);
  const addButtonRef = useRef(null);
  const [user, setUser] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);

  const [newRecord, setNewRecord] = useState({
    
    name: '',
    internalLinks: '',
    externalLinks: ''
  });

  const handleAddRecord = () => {
    console.log(`before the add request ${newRecord.internalLinks}`);

    fetch("http://localhost:8000/api/api/records/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newRecord.name,
        internal_links: newRecord.internalLinks,
        external_links: newRecord.externalLinks
      })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(`This is the data ${data}`);
        // Reset the new record inputs
        setNewRecord({
          number: '',
          name: '',
          internalLinks: '',
          externalLinks: ''
        });
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };
  const handleEdit = (index) => {
    setEditedIndex(index);
    setQLinks((prevQLinks) => {
      const updatedQLinks = prevQLinks.map((link, i) => {
        if (i === index) {
          return {
            ...link,
            isEditing: !link.isEditing
          };
        }
        return link;
      });
      return updatedQLinks;
    });
  };
  
  const handleCancelEdit = () => {
    setEditedIndex(-1);
    setQLinks((prevQLinks) =>
      prevQLinks.map((link) => ({
        ...link,
        isEditing: false
      }))
    );
  };
  
  
  const handleInputChange = (event, index, field) => {
    const { value } = event.target;
    const updatedLinks = qLinks.map((link, i) => {
      if (i === index) {
        return {
          ...link,
          [field]: value
        };
      }
      return link;
    });
    setQLinks(updatedLinks);
  };
  
  const handleSave = async (index, updatedRecord) => {

    console.log(updatedRecord);
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/records/${updatedRecord.id}/`, updatedRecord);
      if (response.status === 200) {
        const updatedLinks = [...qLinks];
        updatedLinks[index] = updatedRecord;
        setQLinks(updatedLinks);
        setEditedIndex(null); // Clear the editedIndex state variable
      } else {
        // Handle error if necessary
      }
    } catch (error) {
      // Handle error if necessary
    }
  };
  
  

  const handleDelete = (pk) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/api/api/records/delete/${pk}`)
        .then(() => {
          // Update the records state after successful deletion
          setQLinks((prevQLinks) => prevQLinks.filter((rec) => rec.id !== pk));
        })
        .catch((error) => {
          console.error('Error deleting record:', error);
        });
    }
  };


  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/api/records/id/')
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
      });
  }, []);

  useEffect(() => {
    const addButton = addButtonRef.current;

    fetch("http://localhost:8000/api/api/records/")
      .then(response => response.json())
      .then(data => {
        console.log(`The returned list ${data}`);
        setQLinks(data);
      });

    if (addButton) {
      addButton.addEventListener("click", function() {
        // Make an HTTP POST request to the backend API endpoint
        fetch("http://localhost:8000/api/api/records/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            order: 1, // Set the order value accordingly
            name: "Record Name", // Set the name value accordingly
            internal_links: "", // Set the internal links value accordingly
            external_links: "" // Set the external links value accordingly
          })
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response from the backend
            console.log(data);
          })
          .catch(error => {
            // Handle any errors that occur during the request
            console.error(error);
          });
      });
    }
  }, [newRecord]);

  const handleToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleClickM = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpeen(!isOpeen);
  };

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

    const handleOutsideClick = event => {
      if (blurRef.current && event.target === blurRef.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  console.log(`The fetched list here ${qLinks}`);
  
  return (
    <div>
      <button className="font-semibold text-lg" onClick={handleClickM}>
        Quick Links
      </button>
      {isOpen && (
        <div
          className="fixed flex top-0 h-full w-full justify-center left-0 bg-dro_white bg-opacity-75 border-dro_gray blur-background backdrop-filter z-20"
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            backdropFilter: "blur(10px)",
          }}
          ref={blurRef}
        >
          <div className="fixed max-w-xs md:max-w-5xl md:w-full">
            <div className="bg-dro_white shadow-lg rounded-lg h-screen w-">
              <div className="p-8 h-full">
                <div className="h-full overflow-x-auto overflow-y-auto">
                <table className="w-full">
  <thead>
    <tr>
      <th className="border-2 border-black w-1/12">No.</th>
      <th className="border-2 border-black w-1/12">Name</th>
      <th className="border-2 border-black w-4/12">Internal Network</th>
      <th className="border-2 border-black w-4/12">External Network</th>
      <th className="border-2 border-black w-4/12">Actions</th>
    </tr>
  </thead>
  <tbody>
    {qLinks &&
      qLinks.map((record, index) => (
        <tr key={record.id}>
          <td className="border-2 border-black w-1/12">{index}</td>
          <td className="border-2 border-black w-3/12">
            {record.isEditing ? (
              <input
                type="text"
                value={record.name}
                onChange={(e) => handleInputChange(e, index, 'name')}
              />
            ) : (
              record.name
            )}
          </td>


          <td className="border-2 border-black w-4/12">
            {record.isEditing ? (
              <input
                type="text"
                value={record.internal_links}
                onChange={(e) => handleInputChange(e, index, 'internal_links')}
              />
            ) : (
              record.internal_links && <a href={record.internal_links}>{record.internal_links}</a>
            )}
          </td>
          <td className="border-2 border-black w-4/12">
            {record.isEditing ? (
              <input
                type="text"
                value={record.external_links}
                onChange={(e) => handleInputChange(e, index, 'external_links')}
              />
            ) : (
              record.external_links && <a href={record.external_links}>{record.external_links}</a>
            )}
          </td>
          <td className="border-2 border-black w-4/12">
            {record.isEditing ? (
              <div className="flex space-x-2 p-2">
                <button className=" bg-dro_green rounded-md py-1 px-1 text-dro_white" onClick={() => handleSave(index, { ...record, isEditing: false })}>
                  Save
                </button>
                <button className=" bg-dro_red rounded-md py-1 px-1 text-dro_white" onClick={() => setEditedIndex(null)}>Cancel</button>
              </div>
            ) : (
              <div className="flex space-x-2 p-2">
                {!record.isEditing && (
                  <button className=" bg-dro_yellow rounded-md py-1 px-3" onClick={() => handleEdit(index)}>Edit</button>
                )}
                <button className=" bg-dro_red rounded-md py-1 px-1 text-dro_white" onClick={() => handleDelete(record.id)}>Delete</button>
              </div>
            )}
          </td>
        </tr>
      ))}
  </tbody>
</table>


                  <div className="py-2">

                    <button className="px-2 py-1 bg-dro_green" onClick={handleClick}>
                      +
                    </button>
                    {isOpeen && (
                      <>
                        <input
                          className="border px-2"
                          type="text"
                          value={newRecord.name}
                          onChange={(e) =>
                            setNewRecord((prevState) => ({
                              ...prevState,
                              name: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border px-2"
                          type="text"
                          value={newRecord.internalLinks}
                          onChange={(e) =>
                            setNewRecord((prevState) => ({
                              ...prevState,
                              internalLinks: e.target.value,
                            }))
                          }
                        />
                        <input
                          className="border px-2"
                          type="text"
                          value={newRecord.externalLinks}
                          onChange={(e) =>
                            setNewRecord((prevState) => ({
                              ...prevState,
                              externalLinks: e.target.value,
                            }))
                          }
                        />
                        <button onClick={handleAddRecord}>Add</button>
                      </>
                    )}
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 