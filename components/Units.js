import Image from "next/image";
import dep from "public/image/dep.png";
import organization from "public/image/organization.png";
import { useClient } from 'react';

export default function Units() {
return<>

 <div className="flex flex-row mt-96 md:grid-cols-2 justify-center py-52 px-30 -ml-14 ">
  <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-12">Organizational Units</h1>
        <div className="flex justify-center gap-32">
          <div className="flex flex-col items-center">
            <Image src={organization} height={70} width={70} />
            <h1 className="text-xl font-semibold">Business units</h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="mt-2">
            <Image src={dep} height={60} width={65} />
            </div>
            <h1 className="text-xl mt-1 font-semibold">Companies</h1>
            
          </div>
          
        </div>
    
</div>
          </div>


</>

}