import { SiRedux } from "react-icons/si";
import { SiAmazons3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiShadcnui, SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FlipWords } from "@/components/ui/flip-words";
import Footer from "./components/Footer";
import { Github } from "lucide-react";
import { Metadata } from "next";
const words = ["Frontend", "Backend", "Full Stack"];

export const metadata: Metadata = {
  title: "Alex Sison | Home",
  description: "Alex Sison Portfolio",
};

const stackLink = [
  { icon: TbBrandNextjs },
  { icon: DiReact },
  { icon: SiTypescript },
  { icon: SiTailwindcss },
  { icon: SiShadcnui },
  { icon: SiRedux },
  { icon: FaAws },
  { icon: SiAmazons3 },
  { icon: DiMongodb },
  { icon: Github },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center h-[80vh] text-center font-mono tracking-tighter ">
      <div>
        <h1 className=" text-5xl md:text-7xl font-extrabold font-mono">
          Hi, I&apos;m Alex.
        </h1>
      </div>
      <div className="flex text-xl md:text-3xl font-bold pt-4 text-muted-foreground">
        <h2>
          I&apos;m a {""}
          <FlipWords words={words} />
          developer proficient in Next.js.
        </h2>
      </div>
      <div className="flex mt-40 space-x-4 items-center px-16 md:px-0">
        {stackLink.map((link, idx) => (
          <div key={idx}>
            <link.icon className="md:h-12 md:w-12 h-10 w-10" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
