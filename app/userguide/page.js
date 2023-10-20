import Image from "next/image"
import home from "public/image/home.png";
export default function Userguide(){
    return(        
<>
{/* style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} */}
<Image src={home} layout="fill" objectFit="cover" />
</>
)}