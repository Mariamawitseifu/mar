export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`http://localhost:8000/api/detail/${id}`);
    const data = await res.json();
   
    return {
    props: {
      data,
    },
    };
   }
   
   function Detail({ data }) {
    return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
    );
   }
   
//    export default Detail;
//    'use client'
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// export default function Details({query}) {
//   const router = useRouter();
//   const { id } = router.query;
 
//   console.log('ID:', id); // Log the ID from the router query
 
//   const [detail, setDetail] = useState(null);
 
//   const fetchDetail = async () => {
//    console.log('Fetching detail for ID:', id); // Log the ID before fetching detail
//    const res = await fetch(`/app/details/page.js/${id}`);
//    const data = await res.json();
//    console.log('Fetched data:', data); // Log the fetched data
//    return data;
//   }
 
//   useEffect(() => {
//    fetchDetail().then(data => {
//      console.log('Setting detail:', data); // Log the data before setting detail
//      setDetail(data); 
//    });
//   }, [id]);
 
//   if(!detail) return <p>Loading...</p>;
 
//  return (
//    <div>
//      <h1>{detail.title}</h1>
//      <h2>Name</h2>
//      <p>{detail.name}</p>
//      <h2>Internal Links</h2> 
//      <p>{detail.internal_links}</p>
//      <h2>External Links</h2>
//      <p>{detail.external_links}</p>
//      <h2>Description</h2>
//      <p>{detail.description}</p>
//    </div>
//  )
// }
