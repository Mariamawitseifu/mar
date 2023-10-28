import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <img src="C:\Users\merry\OneDrive\Desktop\New folder\second\Newtest\public\image\news.png" alt="Card" />
      </div>
    </div>
  );
};

export default Card;
<div className=" bg-dro_yellow p-10 w-full" >
       
<h1></h1>

<div className="flex flex-col justify-start">


<div className=" flex flex-row">

<div className=" flex flex-row mt-20 px-10">
<Link href="/home" >
<Image className="" src={dro} height={1} width={50} alt="droga logo" />
</Link> 
{/* <div className="  mt-6 ml-1">
<p className=" text-sm font-black"> DROGA GROUP</p>
<p className=" text-xs font-md"> Serving the People!</p>
</div> */}
</div>
<div className="flex flex-col text-dro_black">

    <div><h1 className="text-xl font-bold">Contact Us</h1> </div>
    
    <div className="my-1"></div>
    {/* <div><h1 className="text-md font-semibold">Published By: </h1> </div> */}
    {/* <div className="my-3"></div> */}
    <div className=" m-1 text-xs"><p>Droga Group</p> </div>
    <div className=" m-1 text-xs"><p>Gulele Sub City-Woreda 9</p> </div>
    <div className=" m-1 text-xs"><p>House No-New-Droga Tower</p> </div>
    <div className=" m-1 text-xs"><p>Addis Ababa, Ethiopia</p> </div>
    <div className="my-2 "></div>
    <div className=" m-1 text-xs"><p>Phone: +251112734554</p> </div>
    <div className=" m-1 text-xs"><p>Mobile: +251112734554</p> </div>
    <div className=" m-1 text-xs"><p>info@drogapharma.com</p> </div>
    <div className=" m-1 text-xs"><p>www.drogapharma.com</p> </div>
</div>
<div className="font-bold flex flex-col px-14 ">
<p className="text-xl">Links</p>
<Link href="/home"> 
<button className=" mt-3 font-semibold">Home</button>
</Link>
<Link href="/home"> 
<button className=" mt-3 font-semibold">Our Services</button>
</Link>
<Link href=" /Faqaccord"> 
<button className=" mt-3 font-semibold">FAQS</button>
</Link>
</div>
<div className=" px-14 font-bold">
<p className="text-xl">
FAQS
</p>
    </div>
    <div className=" px-14 font-bold">
<p className="text-xl">
Medias
</p>
    </div>

</div>




</div>

 </div>
{/* <tr>
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
            Rest of the table rows */}