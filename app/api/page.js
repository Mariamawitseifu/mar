// import axios from 'axios';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { title, body } = req.body;

     
//       // Forward the data to your Django backend
//       const response = await axios.post('http://localhost:8000/api/api/blog/', {
//         title: title,
//         body: body,
//       });

//       res.status(response.status).json(response.data);
//     } catch (error) {
//       res.status(error.response.status).json(error.response.data);
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
