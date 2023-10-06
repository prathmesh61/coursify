import Features from "@/components/Features";
import Footer from "@/components/base/Footer";
import Hero from "@/components/Hero";
import LearnMore from "@/components/LearnMore";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main>
      <Hero />
      <Features />
      <LearnMore />
      <Footer />
    </main>
  );
}
