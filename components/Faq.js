import Image from "next/image"
import news from "public/image/news.png"
export default function faq(){
    return (

<div className="flex flex-col ">
<div className="flex items-center justify-center">
       <h1 className=" px-12 text-2xl font-semibold relative mb-12" > Announcements and Blogs</h1> 
     </div>
  
<div className=" ml-24 sm:ml-8 lg:ml-3 mr-24 sm:mr-4 lg:mr-3 bg-dro_yellow rounded shadow-lg ">

<div className=" flex lg:flex-row sm:flex-row justify-end">
  <div className="flex flex-col justify-center px-24">
    <div className="font-bold sm:mt-3 text-xl sm:text-lg ">DROGA RESEARCH GRANT</div>
    <div className="text-md sm:text-sm font-medium"> 12,AUG,2023</div>
    <div className="sm:mb-3">
    <button className=" rectangle-button float bg-dro_black inline-block px-4 py-2 mt-10 right-5 sm:mt-6 sm:py-2  text-dro_white rounded">Visit Us </button>
  </div>
  </div>
  <div className="">
    <div className=" h-2/3 ">
    <Image 
     src={news} 
    height={500} 
    width={700}/>
    </div>
  </div>
      </div>
</div>
</div>

)
}