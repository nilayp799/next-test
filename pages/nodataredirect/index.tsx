
const NoDataRedirect = () =>{
  return(
    <></>
  )
}

export default NoDataRedirect;

export async function getStaticProps(){
  const data = undefined;
  if(!data){
    return{
      redirect:{
        destination:'/nodataredirect/destination'
      }
    }
  }
}