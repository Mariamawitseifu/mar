
import ifb from "public/image/ifb.png";
import iedge from "public/image/iedge.png";
import igmail from "public/image/igmail.png";
import instagram from "public/image/instagram.png";
import itwitter from "public/image/itwitter.png";
import iwechat from "public/image/iwechat.png";
import ilinkedin from "public/image/ilinkedin.png";
import Link from 'next/link';

export default function droga(){
return<>
<div>
<h1 className=" font-semibold text-4xl px-9 py-20 bg-dro_yellow">
   Droga Pharma
</h1>
</div>
<div className=" py-20 grid grid-cols-3 bg-dro_green">

<div className=" px-3 grid grid-cols-6 grid-rows-2 gap-1">
<img src={itwitter} width={50}height={50}>
</img>
<img src={ifb} height={50} width={50}>
</img> 
<img src={igmail} height={50} width={50}>
</img>
<img src={instagram} height={50} width={50}>
</img>
{/* <img src={itelegram} height={50} width={50}>
</Image> */}
{/* <img src={iwechat} height={50} width={50}>
</Image>  */}
<img src={ilinkedin} height={50} width={50}>
</img> 
</div>
</div>


</>

}