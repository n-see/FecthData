import { useEffect, useRef } from "react";


const UseEffectExample2 = () => {

    const ref = useRef<HTMLInputElement>(null);
    

    useEffect(() => {
        if(ref.current) ref.current.focus()
            document.title = "this is a ref"

        
    }, [])
    

  return (
    <>
        <h1 className="text-center">UseEffect Example 2</h1>
        <input ref={ref} type="text" className='form-control' />
    </>
  )
}

export default UseEffectExample2