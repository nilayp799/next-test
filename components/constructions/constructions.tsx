
import ImageCard from "../ImageCard/ImageCard";
import HeadingBlock from "../comman/HeadingBlock";
import { useEffect,useState } from "react";

const Constructions =(props:any) => {
  console.log(props.data)
  // const [constructionsData, setconstructionsData] = useState([]);
  // const [isLoading, setisLoading] = useState(true);
  //  useEffect(() => {
  //   fetch('/api/constructions/getConstructions',
  //   {
  //     method:"GET",
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //   }).then(res=>{return res.json()})
  //   .then(data=> {
  //     setconstructionsData(data.constructions)
  //     setisLoading(false)
  //   })
  // }, [])
  
  
  return (
    <>
    <HeadingBlock heading="Constructions" description="this component is build using static site generation method and hences it's too fast.. compare it with below simple component"/>
    <div className="w-full mt-14 gap-4 flex-wrap flex justify-center items-center">
      {/* {isLoading ? <>Data loading using useEffect()...</> : <></>} */}
      {props.data.map((item:any, index:any) => {
        return (
          <>
            <ImageCard key={index} data = {{id:item["_id"],heading:item["heading"],description:item["description"],image:item["image"]}}/>
          </>
        );
      })}
    </div>
    </>
  );
};

export default Constructions;
