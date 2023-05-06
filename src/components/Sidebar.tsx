import {
    Home as HomeIcon,
    Search,
    Library,
  } from "lucide-react";
  import Image from "next/image";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 font-semibold text-sm text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 font-semibold text-sm text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 font-semibold text-sm text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Músicas Curtidas
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Lo-Fi hip-hop
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Blues Instrumentals Only
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Heavy Instrumental Metal
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Jazz Relax
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Blues Focus
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
      </nav>
    </aside>
  );
}
