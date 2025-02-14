import { DiMongodb } from "react-icons/di";
import { SiShadcnui, SiTailwindcss } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FlipWords } from "@/components/ui/flip-words";
import Footer from "./components/Footer";
const words = ["Frontend", "Backend", "Full Stack"];

const stackLink = [
  { icon: TbBrandNextjs },
  { icon: DiReact },
  { icon: SiTailwindcss },
  { icon: SiShadcnui },
  { icon: FaAws },
  { icon: DiMongodb },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center h-[80vh] text-center">
      <div>
        <h1 className=" text-5xl md:text-7xl font-extrabold font-mono">
          Hi, I&apos;m Alex.
        </h1>
      </div>
      <div className="flex font-mono text-xl md:text-3xl font-extrabold pt-4 text-muted-foreground">
        <h2>
          I&apos;m a {""}
          <FlipWords words={words} />
          developer proficient in Next.js.
        </h2>
      </div>
      <div className="flex mt-40 space-x-4 items-center">
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
