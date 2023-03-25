import { useRouter } from "next/router";
const ServicesPage = () =>{
  const router = useRouter();
  
  return (
    <div>Services {router.query.id}</div>
  )
}

export default ServicesPage;

// export async function getStaticPaths(){
//   return{
//     fallback:true,
//     paths:[

//     ]
//   }
// }

// export async function getStaticProps(){
//   fetch("https://jsonplaceholder.typicode.com/users",{
//     method:'GET',
//     headers:{
//       'Content-Type':'application/json'
//     }
//   }).then(res => console.log(res))

//   return{
//     props:{
//       test:'test'
//     }
//   }
// }