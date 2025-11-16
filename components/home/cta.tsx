import { Button } from "@/components/ui/button";
import { GithubRoundedIcon } from "@/components/icons/github";
import { Logo } from "../icons/logo";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* <AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				className={cn(
					"[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
					"inset-x-8 inset-y-[-30%] h-[200%] skew-y-12"
				)}
			/> */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "hidden md:block [mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
          "inset-x-[-1px] inset-y-0 h-[200%]",
        )}
      />
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "hidden md:block [mask-image:radial-gradient(400px_circle_at_top_right,white,rgba(255,255,255,0.6),transparent)]",
          "inset-x-[32px] inset-y-0 h-[200%]",
        )}
      />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <div className="relative inline-block">
            <h2 className="font-librebaskerville text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 sm:mb-6 relative z-10">
              Ready to get started?
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
            Join thousands of students accessing quality academic notes. Upload
            your notes or explore what others have shared.
          </p>
          <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center z-20">
            <Button size="lg" className="px-3 sm:px-8 w-auto" asChild>
              <a href="/notes">Browse Notes</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-3 sm:px-8 w-auto"
              asChild
            >
              <a href="/upload-notes">Upload Notes</a>
            </Button>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 z-10 left-1/2 -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-40 sm:opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, transparent 0%, transparent 30%, rgb(59 130 246 / 0.1) 60%, rgb(37 99 235 / 0.6) 100%)",
        }}
      ></div>
    </section>
  );
}
