import { SoundToggleButton } from "@/components/common/SoundSwitch";
import { ThemeToggleButton } from "@/components/common/ThemeSwitch";
import NotFoundArt from "@/components/not-found/NotFoundArt";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found - Neel",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <header className="mx-auto w-full max-w-2xl">
        <div className="site-nav mx-4 mt-4 flex items-center justify-between rounded-2xl p-2 sm:mx-0">
          <Link href="/" className="nav-pill gap-2 pl-1.5">
            <Image
              src="/neel-profile.webp"
              alt=""
              width={24}
              height={24}
              className="rounded-full"
            />
            Neel Patel
          </Link>
          <div className="flex items-center gap-1">
            <SoundToggleButton />
            <ThemeToggleButton blur />
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <NotFoundArt />
        {/* The artwork is picked in the browser, so without scripts this
            is the whole page. */}
        <noscript>
          <div className="flex flex-col items-center gap-3 px-4 pb-16 text-center">
            <h1 className="text-xl sm:text-3xl font-bold">Page not found</h1>
            <p className="text-text-muted">
              Error 404: the link is broken or the page moved.
            </p>
            <Link href="/" className="btn-pill btn-pill--primary">
              Back home
            </Link>
          </div>
        </noscript>
      </main>
    </div>
  );
}
