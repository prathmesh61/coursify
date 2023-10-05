import {
  aboutUs,
  connectWithUs,
  courseCategories,
  learningResources,
} from "@/utils/FooterLinks";
import { FooterLink } from "@/utils/types";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className="bg-[#161D29] mt-20  py-2 px-4 text-zinc-200 flex flex-col gap-5">
      <div className="px-4 max-w-screen-2xl mb-4 mt-10 gap-4  grid grid-cols-2 lg:grid-cols-4 lg:place-items-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-lg font-bold">Categories</h2>
          {courseCategories.map((link: FooterLink) => (
            <span className="font-light text-sm cursor-pointer" key={link.id}>
              {link.name}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-lg font-bold">Resources</h2>
          {learningResources.map((link: FooterLink) => (
            <span className="font-light text-sm cursor-pointer" key={link.id}>
              {link.name}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-lg font-bold">about</h2>
          {aboutUs.map((link: FooterLink) => (
            <span className="font-light text-sm cursor-pointer" key={link.id}>
              {link.name}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <h2 className="text-lg font-bold">connect</h2>
          {connectWithUs.map((link: FooterLink) => (
            <span className="font-light text-sm cursor-pointer" key={link.id}>
              {link.name}
            </span>
          ))}
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
