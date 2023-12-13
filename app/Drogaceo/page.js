import React from 'react';
import 'app/drogaceo/drogaceo.css'

const Drogaceo = () => {
 const IconLink = ({ src, name, link }) => (
   <div className="flex items-center">
     <div className="flex flex-row">
       <div>
         <img src={src} height={50} width={50} alt={name} />
         <h1 className="">{name}</h1>
       </div>
     </div>
     <div>
       <a className="underline" href={link}>{link}</a>
     </div>
   </div>
 );

 const columns = [
   {
     src: "/image/www.png",
     name: "Website",
     link: "https://drogapharmacy.com/"
   },
   {
    src: "/image/deskphone.png",
    name: "DeskPhone",
    link: "www.lo.com"
   },
   // Add more columns as needed
 ];

   const row1 =[
    {
        src: "/image/itwitter.png",
        name: "Twitter",
        link: "https://twitter.com/DrogaPharm63360"
      },
      {
        src: "/image/telegram.png",
        name: "Telegram",
        link: "https:\\telegram\Ethiopharma"
       },
   ];
   const row2 =[
    {
        src: "/image/ifb.png",
        name: "Facebook",
        link: "www.trustethiopharma.com"
      },
      {
        src: "/image/whatsappblue.png",
        name: "Whatsapp",
        link: "https:whatsapp\trustethiopharma"
       },
   ];
   const newRow = [

    {
         src: "/image/ilinkedin.png",
         name: "LinkedIn",
         link: "www.trustethiopharma.com"
       },

    {
     src: "/image/phoned.png",
     name: "Phone No",
     link: "+25196969654"
    },
       // Add more items as needed
   ];
 return (
    <div className="flex-container">
    {columns.map((column, index) => (
      <div className="flex-item" key={index}>
        <IconLink {...column} />
      </div>
    ))}
    {row1.map((column, index) => (
      <div className="flex-item" key={index}>
        <IconLink {...column} />
      </div>
    ))}
    {newRow.map((column, index) => (
      <div className="flex-item" key={index}>
        <IconLink {...column} />
      </div>
    ))}
    {row2.map((column, index) => (
      <div className="flex-item" key={index}>
        <IconLink {...column} />
      </div>
    ))}
  </div>
 );
};

export default Drogaceo;
