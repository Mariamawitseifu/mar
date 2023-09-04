import Image from "next/image"
import Droga from 'public/image/Droga.jpg'
export default function Groupcards(){
return<>
            <div>

<div  className="max-w-xs overflow-hidden shadow-lg">
    <Image className="w-full" src={Droga} height={30} width={30}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Group CEO</div>
    {/* <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p> */}
  </div>
</div>


        </div>

</>
}