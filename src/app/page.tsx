import { BentoDemo } from "@/components/bento";
import CustomDock from "@/components/customdock";
import Intro from "@/components/intro";
import { RetroGridDemo } from "@/components/retro";


export default function Home() {
  return (
    <>
      <RetroGridDemo />
      <div className="w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Intro />
        
            <div className="w-full mt-5 mb-10 mx-auto">
              <BentoDemo />
            </div>
         
         <CustomDock />
        </main>
      </div>
    </>
  );
}
