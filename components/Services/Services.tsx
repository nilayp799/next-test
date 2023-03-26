import HeadingBlock from "../comman/HeadingBlock";
import ImageCard from "../ImageCard/ImageCard";
import { useState,useEffect } from "react";
interface CardWithLink {
  id: number;
  image: string;
  heading: string;
  description: string;
  isLink: boolean;
  link: string;
}

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
   useEffect(() => {
    fetch('/api/services/getServices',
    {
      method:"GET",
      headers:{
        'Content-Type':'application/json'
      },
    }).then(res=>{return res.json()})
    .then(data=> {
      setServicesData(data.services)
      setisLoading(false)
    })
  }, [])


  return (
    <>
    <HeadingBlock heading="Services" description="this is simple react component and we've used useeffect for fetching data and you can observe that it takes too much time"/>
    <div className="w-full mt-14 gap-4 flex-wrap flex justify-center items-center">
    {isLoading ? <>Data loading using useEffect()...</> : <></>}
      {servicesData.map((item, index) => {
        return (
          <>
            <ImageCard key={index} data = {{id:item["_id"],heading:item["heading"],description:item["description"],image:item["image"],isLink:true,link:'/services'}}/>
          </>
        );
      })}
    </div>
    </>
  );
};
export default Services;

