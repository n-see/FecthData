
import useUsers from "../hooks/useUsers";
import userService from "../services/userService";


// interface User {
//     id: number,
//     name: string
// }


const CreateDataService = () => {

    const {users, setUsers, error, setError, isLoading, setIsLoading} = useUsers();
    
    //Lets create a helper function  to help us delete from our front end UI
    const addUser = () => {
        //original users []
        const originalUsers = [...users];
        //we are going to have a new object with an id and name
        const newUser = {id: 0, name: "Aaron "};
        //set our users and spread all users and add our new user
        setUsers([newUser, ...users])
        //We need to send this updated data to our backend
        userService.create(newUser)
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

export default CreateDataService