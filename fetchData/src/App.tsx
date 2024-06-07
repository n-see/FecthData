import { useState } from "react";
import ProductList from "./Components/ProductList"
import UseEffectExample from "./Components/UseEffectExample"
import UseEffectExample2 from "./Components/UseEffectExample2"
import FetchingAxios from "./Components/FetchingAxios";
import FetchingWFetch from "./Components/FetchingWFetch";
import AsyncAwait from "./Components/AsyncAwait";
import LoadingIndicator from "./Components/LoadingIndicator";
import DeleteData from "./Components/DeleteData";


const App = () => {

  const [category, setCategory] = useState('');
  return (
    <>
      <h1 className="text-center">React Fetching Data Examples, Using Axios, Services, HTTP, CRUD</h1>
      {/* <UseEffectExample/> */}
      {/* <UseEffectExample2/> */}
      {/* <ProductList category={category}/>
      <div>
            <select className="form-select" onChange={e => setCategory(e.target.value)}>
                <option value=''></option>
                <option value='Clothing'>Clothing</option>
                <option value='Household'>Household</option>
            </select>
        </div> */}
        {/* <FetchingAxios/> */}
        {/* <FetchingWFetch/> */}
        {/* <AsyncAwait/> */}
        {/* <LoadingIndicator/> */}
        <DeleteData/>
    </>
  )
}

export default App
