import AboutSection from "@/components/AboutSection";
import AlsoUsedSection from "@/components/AlsoUsedSection";
import FeaturedSection from "@/components/FeaturedSection";
import MaterialsSection from "@/components/MaterialsSection";
import Navbar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>eCommerce Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen py-4 px-4 md:px-16 font-archivo">
        <Navbar />
        <FeaturedSection />
        <AboutSection />
        <AlsoUsedSection />
        <MaterialsSection />
      </main>
    </>
  );
}
