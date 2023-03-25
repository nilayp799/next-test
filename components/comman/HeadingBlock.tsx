
const HeadingBlock =  (props:any) =>{
  return (
    <div>
      <div className="section-header mt-10">
          <h2>{props.heading}</h2>
          <p>{props.description}</p>
        </div>
    </div>
  )
}

export default HeadingBlock;