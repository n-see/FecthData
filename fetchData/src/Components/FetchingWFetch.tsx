import { useEffect, useState } from 'react'

interface User {
    id: number
    name: string
}

const FetchingWFetch = () => {

    const [users, setUsers] = useState<User[]>([])

    
    const fetchUserData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        }
        
        //We need a useEffect for rendering our data once our fetching Fetch component loads, no dependency in the array, no clean up function
        useEffect(() => {
        
            fetchUserData();
            
        }, [])
        

  return (
    <>
        <h1 className='text-center'>Fetching Data usg Fetch</h1>
        <div>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    </>
  )
}

export default FetchingWFetch