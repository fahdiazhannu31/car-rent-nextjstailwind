import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Jumbotron from "@/components/Jumbotron";
import CardRow from "@/components/CardRow";
import SearchCar from "@/components/SearchCar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head/>
      
     <section>
     <Jumbotron />
     <hr />
     <SearchCar/>
          <div className="title__card mt-5 mb-4">
      Paling banyak disewa <a href="#" className="see_details flex-1 float-end">Lihat semua</a>
    </div>

    <CardRow />

     </section>
    </>
  );
}
