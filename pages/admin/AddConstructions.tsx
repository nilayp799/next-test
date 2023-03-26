import { useRef } from "react";

const AddConstructions = ()=>{
  const headingRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const submitConstructionHandler = async()=>{
    const res = await fetch('/api/constructions/addConstruction',
    {
      method:'POST',
      body: JSON.stringify({
        heading:headingRef.current.value,
        description:descriptionRef.current.value,
        image:imageRef.current.value,
      }),
      headers:{
        'Content-Type':'application/json'
      }
    });

    const message = await res.json();
    console.log(message)
    headingRef.current.value = "";
    descriptionRef.current.value = "";
    imageRef.current.value = "";
  }
  return(
    <>
    <h1>Add Constructions to DB from header</h1>
    <input type="text" name="heading" id="heading" ref={headingRef} placeholder="heading" />
    <input type="text" name="description" id="description" ref={descriptionRef} placeholder="description" />
    <input type="text" name="image" id="image" ref={imageRef} placeholder="image link" />
    <button onClick={submitConstructionHandler} style={{color:'red'}}>add Construction</button>
    </>
  )
}

export default AddConstructions;