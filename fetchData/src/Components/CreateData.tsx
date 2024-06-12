
import axios from "axios";
import { useEffect, useState } from "react";


interface User {
    id: number,
    name: string
}


const CreateData = () => {

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
    
    //Lets create a helper function  to help us delete from our front end UI
    const addUser = () => {
        //original users []
        const originalUsers = [...users];
        //we are going to have a new object with an id and name
        const newUser = {id: 0, name: "Aaron "};
        //set our users and spread all users and add our new user
        setUsers([newUser, ...users])
        //We need to send this updated data to our backend
        axios.post('https://jsonplaceholder.typicode.com/users', newUser)
        .then(response => setUsers([response.data, ...users]))
        .catch(error => {
            setError(error.message);
            setUsers(originalUsers)
        })
    }
 

  return (
    <>
        <h1 className="text-center">CRUD Create with Axios</h1>
        <button className ="btn btn-outline-primary mx-3 mb-3" onClick={addUser}>Add</button>
        <ul className="list-group">
            {users.map(user => <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name} <button className="btn btn-outline-danger">Delete</button></li>)}
            
            {error && (<p className="text-danger">{error}</p>)}
            {isLoading && <div className="spinner-border"></div>}
        </ul>
    </>
  )
}

export default CreateData