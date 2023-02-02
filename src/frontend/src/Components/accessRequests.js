import React, { useState , useEffect} from 'react';
import ReuestDesign from "./requestDesign"

// const RequestRow = ({ request }) => {
//   const [status, setStatus] = useState(request.status);

//   const handleAccept = () => {
//     // Send a request to the server to update the status of the request in the database
//     setStatus('accepted');
//   };

//   const handleReject = () => {
//     // Send a request to the server to update the status of the request in the database
//     setStatus('rejected');
//   };
import {isAusthenticated} from "../Helpers/auth"

const ManageRequests = ()=>{
const {_id} = isAusthenticated()
const [requets, setRequests] = useState(null)
useEffect(()=>{
    const fetchCourses = async () => {
        const response= await fetch(`/admin/getrequests/${_id}`)
        const json= await response.json()

        if(response.ok){
            setRequests(json)
            console.log(requets)
        }
        else {
            console.log("There is an eror here")

        }
        }
        fetchCourses()
    },[])

  return (
    <div>

        {requets && requets.map((req)=>(

        <div key={req._id} style={{height:"500px", overflow:"scroll"}}><p><strong>{req.cor.Name}</strong> send a request to Access {req.course.Title}</p>

                    <ReuestDesign key={req._id} request ={req} />

                  
        
        
        
        
        </div>



        ))}



    </div>



  )
//     <tr>
//       <td>{request.name}</td>
//       <td>{request.email}</td>
//       <td>
//         {status === 'pending' && (
//           <>
//             <button onClick={handleAccept}>Accept</button>
//             <button onClick={handleReject}>Reject</button>
//           </>
//         )}
//         {status === 'accepted' && <span>Accepted</span>}
//         {status === 'rejected' && <span>Rejected</span>}
//       </td>
//     </tr>
//   );
// };
        }
export default ManageRequests;