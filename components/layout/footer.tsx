"use client";

// import GithubIcon from '@/components/icons/github';
// import XIcon from '@/components/icons/x';
import { usePathname } from "next/navigation";
import { Logo } from "../icons/logo";

export default function Footer() {
  const pathname = usePathname();
  // Show border-top when not on home page
  const showBorderTop = pathname !== "/";

  return (
    <footer
      className={`border-x ${
        showBorderTop ? "border-t" : ""
      } border-border z-50 bg-background`}
    >
      <div className="max-w-6xl mx-auto px-2 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            @{new Date().getFullYear()}
            <Logo size="md" className="inline-block" />
            <span className="font-semibold">NotesNeo</span>
            {/* Built with ❤️ for passionate developers. Free forever. */}
          </p>
          <div className="flex font-medium text-xs md:text-sm text-muted-foreground">
            {/* <a 
							href='https://github.com' 
							className='text-muted-foreground hover:text-primary transition-colors'
							aria-label='GitHub'
							target='_blank'
							rel='noopener noreferrer'
						>
							<GithubIcon />
						</a>
						<a 
							href='https://x.com' 
							className='text-muted-foreground hover:text-primary transition-colors'
							aria-label='X (Twitter)'
							target='_blank'
							rel='noopener noreferrer'
						>
							<XIcon />
						</a> */}
            Built by&nbsp;
            <a
              href="https://deepakmodi.tech/"
              className="text-foreground hover:text-primary hover:transition-colors underline underline-offset-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deepak Modi
            </a>
            . The source code is available on&nbsp;
            <a
              href="https://github.com/decodewithdeepak/notesneo"
              className="text-foreground hover:text-primary hover:transition-colors underline underline-offset-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
