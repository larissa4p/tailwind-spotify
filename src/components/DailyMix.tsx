import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function DailyMix() {
  return (
    <>
      <h2 className="font-semibold text-2xl mt-10">Made for Larissa Bessa</h2>

      <div className="grid grid-cols-6 gap-4 mt-4">
        <a
          href="##"
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={120}
            alt="Capa do álbum Metallica"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href="##"
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={120}
            alt="Capa do álbum Metallica"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href="##"
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={120}
            alt="Capa do álbum Metallica"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href="##"
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={120}
            alt="Capa do álbum Metallica"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href="##"
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={120}
            alt="Capa do álbum Metallica"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
      </div>
    </>
  );
}
