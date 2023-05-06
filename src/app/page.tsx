import Albuns from "@/components/Albuns";
import DailyMix from "@/components/DailyMix";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <Albuns />
          <DailyMix />
        </main>
      </div>
      <Footer />
    </div>
  );
}
