import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Constructions from "@/components/constructions/constructions";
import Services from "@/components/Services/Services";
import ContactForm from "@/components/contactForm/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Constructions />
      <Services />
      <ContactForm />
    </>
  );
}
