import HeroSection from "@/components/home/hero";
import Features from "@/components/home/features";
import AndroidApp from "@/components/home/android-app";
import Pricing from "@/components/home/pricing";
import Testimonials from "@/components/home/testimonials";
import Creator from "@/components/home/creator";
import FAQs from "@/components/home/faqs";
import CTA from "@/components/home/cta";

const page = () => {
  return (
    <main className="max-w-full flex flex-col min-h-full pt-10">
      <div className="flex-1 border border-border">
        <HeroSection />
        <div className="h-8 bg-dashed"></div>
        <Features />
        <div className="h-8 bg-dashed"></div>
        <AndroidApp />
        <div className="h-8 bg-dashed"></div>
        <Pricing />
        <div className="h-8 bg-dashed"></div>
        <Testimonials />
        <div className="h-8 bg-dashed"></div>
        <Creator />
        <div className="h-8 bg-dashed"></div>
        <FAQs />
        <div className="h-8 bg-dashed"></div>
        <CTA />
        <div className="h-8 bg-dashed"></div>
      </div>
    </main>
  );
};
export default page;
