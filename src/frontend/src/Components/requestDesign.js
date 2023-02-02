import React, { useState } from 'react';
import {isAusthenticated} from "../Helpers/auth"

const RequestRow = ({ request }) => {
  const [status, setStatus] = useState(request.status);
const{_id} = isAusthenticated()
  const handleAccept = () => {
    // Send a request to the server to update the status of the request in the database
    setStatus('accepted');
    fetch(`/admin/updaterequest/${request._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          _id:_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });

  };

  const handleReject = () => {
    // Send a request to the server to update the status of the request in the database
    setStatus('rejected');
    fetch(`/admin/updatereject/${request._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          _id:_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });

  };

  return (
    <tr>
      <td>{request.name}</td>
      <td>{request.email}</td>
      <td>
        {status === 'pending' && (
          <>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleReject}>Reject</button>
          </>
        )}
        {status === 'accepted' && <span>Accepted</span>}
        {status === 'rejected' && <span>Rejected</span>}
      </td>
    </tr>
  );
};

export default RequestRow;