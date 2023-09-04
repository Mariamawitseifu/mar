import Image from "next/image"
import news from "public/image/news.png"
export default function figma(){
    return (

<div className="max-w-2xl rounded overflow-hidden shadow-lg">


  <div className="px-6 py-4 flex flex-row">
    <div className="font-bold text-xl mb-2">Droga Research Grant</div>
    <div>
    <button className="rectangle-button inline-block px-4 py-2 bg-gray-700 text-white rounded">Visit Us </button>
    {/* <p className="text-gray-700 px-6 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p> */}
  </div>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    <div className="position absolute top-0  right-2/4 ">
    <Image src={news} 
    height={500} 
    width={300}/>

  </div>
  </div>
  {/* <div className="position absolute top-0 right-0">
    <Image src={news} 
    height={300} 
    width={200}/>

  </div> */}
  
</div>
)
}