import Bio from "@/components/Bio";
import Card from "@/components/Card";
import Insight from "@/components/Insight";
import Personality from "@/components/Personality";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import Social from "@/components/Social";

export default function Home() {
  return (
    <main className=" container mx-auto p-5  rounded grid gap-5">
      <div className=" grid md:grid-cols-4 gap-5">
        <div className="grid md:col-span-1 gap-5 ">
          <Card />
          <Personality />
          <Social />
        </div>
        <div className="grid md:col-span-3 gap-5">
          <Skills />
          <Bio />
          <Insight />
        </div>
      </div>
    </main>
  );
}
