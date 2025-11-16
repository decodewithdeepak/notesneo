import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import HighlightText from "@/components/ui/highlight-text";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-28">
      <div
        className={cn(
          "absolute bg-background z-10 inset-0 w-full h-full",
          "mask-[radial-gradient(600px_circle_at_center,white,rgba(255,255,255,0.8),transparent)]"
        )}
      ></div>

      <AnimatedGridPattern
        numSquares={10}
        maxOpacity={0.05}
        numOctaves={20}
        width={68}
        height={68}
        duration={3}
      />
      <div className="mx-auto max-w-full z-50 relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-librebaskerville md:text-6xl font-normal text-shadow-xs tracking-tight text-foreground leading-tight">
            <HighlightText>
              <span className="font-semibold">MDU Rohtak Notes</span>
            </HighlightText>
            {/* &nbsp; */}
            <br className=""></br>
            <AuroraText colors={["#10b981", "#06b6d4", "#3b82f6"]} speed={1.5}>
              Anytime, Anywhere
            </AuroraText>{" "}
            {/* <br className='hidden sm:block'></br> */}
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl sm:max-w-2xl mx-auto text-shadow-xs px-4 text-balance sm:text-center">
            Join thousands of students accessing high-quality academic notes.
            Study smarter, not harder.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 z-50 px-4 sm:px-0">
            <Button
              asChild
              className="w-full sm:w-auto text-base shadow-inner shadow-black px-4 py-1 text-shadow-xs gap-2"
            >
              <Link href="/notes">
                <Search className="h-5 w-5" />
                Search Notes Here
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              className="w-full sm:w-auto text-base px-4 py-1 font-medium group gap-2"
            >
              <Link href="https://chat.whatsapp.com/EtBjr3a2V8n1biCfXYf1iw">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Join WhatsApp Group
              </Link>
            </Button>
          </div>

          {/* Trusted by students */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center -space-x-3">
              {/* Profile Pictures */}
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-slate-400 to-slate-500 border-2 border-background flex items-center justify-center text-white font-semibold text-sm">
                A
              </div>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-zinc-400 to-zinc-500 border-2 border-background flex items-center justify-center text-white font-semibold text-sm">
                S
              </div>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-400 to-gray-500 border-2 border-background flex items-center justify-center text-white font-semibold text-sm">
                R
              </div>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-slate-500 to-slate-600 border-2 border-background flex items-center justify-center text-white font-semibold text-sm">
                P
              </div>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-zinc-500 to-zinc-600 border-2 border-background flex items-center justify-center text-white font-semibold text-sm">
                K
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by{" "}
              <span className="font-semibold text-foreground">
                1000+ students
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      {/* <div className='absolute inset-0 z-0'>
				<Image
					src='/images/hero.png'
					alt=''
					width={1754}
					height={544}
					className='opacity-[0.35] w-full h-auto object-contain'
					style={{
						mixBlendMode: 'screen',
						maskImage: 'linear-gradient(black, transparent)',
					}}
					priority
				/>
			</div> */}
    </section>
  );
}
