import { useRouter } from "next/router";
const ServicesPage = () =>{
  const router = useRouter();
  
  return (
    <div>
      <h1>this page is generated using getStaticPaths()</h1>
      <p>Services {router.query.id}</p>
    </div>
  )
}

export default ServicesPage;

export async function getStaticPaths(){
const data = await fetch('https://next-test-nilayp799.vercel.app/api/services/getServices',{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  }).then(res=>res.json());
  const ids = data.services.map((items,id)=>{
    return items["_id"];
  })
  const params = ids.map((sid:any)=>({
    params:{id:sid}
  }))
  return{
    paths:[
      ...params
    ],
    fallback:false,
  }
}

export async function getStaticProps(){
  return{
    props:{
      test:{}
    }
  }
}
