
import { useEffect, useState } from "react";
import userService from "../services/userService";

interface User {
    id: number,
    name: string
}


const UpdateDataService = () => {

    //we need a useState to help us hold the state of our users

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    //UseState for our is Loading Indicator
    const [isLoading, setIsLoading] = useState(false);
    //create a function to help us fetch our data with axios
    const FetchData = () => {
        setIsLoading(true);
        const {request} = userService.getAll<User>()
        request
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
    
    //Lets create a helper function  to help us delete from our front end UI
    const updateUser = (user:User) => {
        const originalUsers = [...users]
        const updatedUser = {...user, name: user.name + '!'}
        setUsers(users.map(u => u.id === user.id ? updatedUser : u))
        userService.update(updatedUser)
        .catch(error => {
            setError(error.message);
            setUsers(originalUsers)
        })
    }

  return (
    <>
        <h1 className="text-center">CRUD Update with Axios</h1>
        <ul className="list-group">
            {users.map(user => <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name} <button className="btn btn-outline-secondary" onClick={() => updateUser(user)}>Update</button></li>)}
            
            {error && (<p className="text-danger">{error}</p>)}
            {isLoading && <div className="spinner-border"></div>}
        </ul>
    </>
  )
}

export default UpdateDataService