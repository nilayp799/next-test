import { useRouter } from "next/router";
const ServicesPage = () =>{
  const router = useRouter();
  
  return (
    <div>Services {router.query.id}</div>
  )
}

export default ServicesPage;
