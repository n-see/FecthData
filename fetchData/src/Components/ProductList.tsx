import { useEffect, useState } from "react"

interface CategoryProps{
    category: string
}


const ProductList = ({category}:CategoryProps) => {

    const [ProductList, setProductList] = useState<string[]>([])

    //UseEffect to help us fetch our data from our backend

    useEffect(()=>{
        console.log('fetching data product in ', category)
        setProductList(["Clothing", 'HouseHold'])


    }, [category])

  return (
    <>
        <h1 className="text-center">Product List</h1>
        <p>{ProductList}</p>

    </>
  )
}

export default ProductList