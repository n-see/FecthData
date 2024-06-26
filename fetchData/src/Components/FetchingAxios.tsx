
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
    id: number,
    name: string
}


const FetchingAxios = () => {

    //we need a useState to help us hold the state of our users

    const [users, setUsers] = useState<User[]>([]);

    //UseState to help use handle errors
    const [error, setError] = useState('');

    //create a function to help us fetch our data with axios
    const FetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers(response.data))
        .catch(error => setError(error.message));
        
    }

    
    
    //UseEffect to help us with our fetching data
    
    useEffect(() => {
        FetchData();
    
    }, [])
    

  return (
    <>
        <h1 className="text-center">Fetching Data with apiClients</h1>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
            {error && (<p className="text-danger">{error}</p>)}
        </ul>
    </>
  )
}

export default FetchingAxios