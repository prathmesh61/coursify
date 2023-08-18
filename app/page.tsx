import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LearnMore from "@/components/LearnMore";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <LearnMore />
    </main>
  );
}
