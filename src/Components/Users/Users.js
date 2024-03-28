import React from 'react'
import { useParams } from 'react-router-dom'
function Users() {

    const {id}=useParams();
  return (
    <div>
      <div className="container w-[100%] h-[20vh] bg-green-600 text-white text-4xl">
        UserID: {id}
        {/* The above curly braces is for adding javascript in html. */}
        
      </div>
    </div>
  )
}

export default Users
