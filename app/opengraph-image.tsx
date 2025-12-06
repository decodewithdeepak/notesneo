import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NotesNeo - MDU Rohtak Notes Anytime, Anywhere";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col items-center justify-center bg-[#0a0a0a] relative overflow-hidden">


        {/* Radial Gradient Overlay */}
        <div
          tw="absolute top-0 left-0 right-0 bottom-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(10,10,10,0.7), rgba(10,10,10,0.9), #0a0a0a)",
          }}
        />

        {/* Content */}
        <div tw="flex flex-col items-center justify-center px-20 py-20 relative z-10">
          {/* Title */}
          <div tw="text-[70px] font-semibold text-[#fafafa] text-center tracking-tight">
            MDU Rohtak Notes
          </div>

          {/* Animated Text with Gradient */}
          <div
            tw="text-[64px] font-bold mb-8 tracking-tight"
            style={{
              background:
                "linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Anytime, Anywhere
          </div>

          {/* Description */}
          <div tw="text-2xl text-[#a1a1aa] text-center max-w-[700px] leading-[1.5]">
            Join thousands of students accessing high-quality academic notes.
            Study smarter, not harder.
          </div>
        </div>

        {/* Bottom Border with Info */}
        <div tw="absolute bottom-0 left-0 right-0 h-[60px] flex items-center justify-between px-[60px] border-t border-white/10">
          <div tw="text-2xl font-semibold text-[#fafafa]">NotesNeo</div>
          <div tw="text-xl text-[#a1a1aa]">notesneo.vercel.app</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
