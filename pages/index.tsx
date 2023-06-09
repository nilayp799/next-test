import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Constructions from "@/components/constructions/constructions";
import Services from "@/components/Services/Services";
import ContactForm from "@/components/contactForm/ContactForm";
import Link from "next/link";

export default function Home(props:any) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h3>go to <Link href='/admin'>admin</Link> for adding cards or any other resources</h3>
      <Constructions data={props.constructions}/>
      <Services />
      <ContactForm />
      <h1 className=" text-center"><Link href='/blogs'>Go to Blogs Page</Link></h1>
      <h3 className="text-center bg-red-500">most form validations are not implemented yet</h3>
    </>
  );
}


export async function getStaticProps(){
  const data = await fetch('https://next-test-nilayp799.vercel.app/api/constructions/getConstructions',
    {
      method:"GET",
      headers:{
        'Content-Type':'application/json'
      },
    }).then(res=>{return res.json()})
  return{
    props:{
      constructions:data.constructions,
    }
  }
}
