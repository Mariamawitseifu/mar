import Image from "next/image"
import home from "public/image/home.png";
import Test from "../test/page"
export default function Userguide(){
    return(        
<>
{/* style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }} */}
<img src="/image/home.png" width={5000} height={5000} layout="fill" objectFit="cover" />
</>
)}