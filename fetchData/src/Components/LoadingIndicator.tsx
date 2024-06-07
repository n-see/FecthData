import axios from "axios"
import { useEffect, useState } from "react";

interface User {
    id: number,
    name: string
}


const LoadingIndicator = () => {

    //we need a useState to help us hold the state of our users

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    //UseState for our is Loading Indicator
    const [isLoading, setIsLoading] = useState(false);
    //create a function to help us fetch our data with axios
    const FetchData = () => {
        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        setUsers(response.data)
        setIsLoading(false);
        }
    )
        .catch(error => {
            setError(error.message)
            setIsLoading(false);
        });
        
        
    }

    
    
    //UseEffect to help us with our fetching data
    
    useEffect(() => {
        FetchData();
    
    }, [])
    

  return (
    <>
        <h1 className="text-center">Loading Indicator</h1>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
            {error && (<p className="text-danger">{error}</p>)}
            {isLoading && <div className="spinner-border"></div>}
        </ul>
    </>
  )
}

export default LoadingIndicator