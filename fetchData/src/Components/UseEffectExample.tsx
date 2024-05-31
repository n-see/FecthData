import { useEffect, useState } from "react"


const UseEffectExample = () => {

    const [count, setCount] = useState(0);

    //UseEffect/// In React the UseEffect hook is used to mange side effects in functional components
    //Fetching Data, manually update DOM, setting timers


    //useEffect takes in a call back function and takes in two arguments 
    useEffect(() => {
        console.log('the count is');
        //This is the effect function. Code will run after every render


        //Optional clean up function. Code here runs before the component is unmounted or before the effect runs again.
        // return () => {
        //     console.log('Clean up Function')
        // }

    }, [/*Dependency array */])

    //What ever is in our [] is our dependency. It will make our useEffect fire every time this changes
    //If you provide an empty array[], the effect will only run once after the initial render

    //You can have multiple useEffects

    useEffect(() => {
        console.log('This will re-run every time our dependence has changed. The count is ', count)
    
    
    }, [count])

    useEffect(() => {
      console.log("Subscribe inside our UseEffect");
      
    
      return () => {
        console.log("Unsubscribe from our clean up function");
        
      }
    }, [count])
    

    //handle increment

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);

    }

    //handle decrement
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
        

    }


  return (
    <>
        <h1 className="text-center">UseEffect Example 1</h1>

        <div className="row justify-content-center">
            <div className="col-6 d-flex flex-column align-items-center">
            <p>Count: {count}</p>
            <div>
            <button className="btn btn-outline-primary mx-3 m-2" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-outline-secondary mx-3 m-2" onClick={handleDecrement}>Increment</button>
            </div>
            
            </div>
        </div>

       

    </>
  )
}

export default UseEffectExample