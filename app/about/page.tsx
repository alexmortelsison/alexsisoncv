import { SiRedux } from "react-icons/si";
import { SiAmazons3 } from "react-icons/si";
import { SiShadcnui, SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { Github, InstagramIcon } from "lucide-react";
import { TbBrandNextjs } from "react-icons/tb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Sison | About",
  description: "Alex Sison Portfolio",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-4 pt-8 font-mono px-2 lg:px-0">
      <div className="hidden md:inline-block col-span-1 border-r h-screen pr-8">
        <Image
          src="/alex.jpg"
          alt="profile photo"
          width={240}
          height={240}
          className="object-cover border-4 border-white rounded-xl"
        />
        <p className="pt-4">
          Name: <span className="text-muted-foreground">Alex Sison</span>
        </p>
        <p>
          Location: <span className="text-muted-foreground">Japan</span>
        </p>
        <p>
          Email:
          <a
            href="https://mail.google.com/mail/?view=cm&to=alexmortelsison@gmail.com&su=Hello&body=This%20is%20a%20test%20email"
            target="_blank"
            className="text-muted-foreground"
          >
            {" "}
            <span className="hover:underline underline-offset-4">Email</span>
          </a>
        </p>
        <div className="flex pt-2 space-x-2">
          <a href={"https://x.com/urmrdev"} target="_blank">
            <FaXTwitter className="h-6 w-6 transform hover:scale-125 duration-200" />
          </a>
          <a href={"https://github.com/alexmortelsison"} target="_blank">
            <Github className="h-6 w-6 transform hover:scale-125 duration-200" />
          </a>
          <a
            href={"https://www.instagram.com/alexmortelsison/"}
            target="_blank"
          >
            <InstagramIcon className="h-6 w-6 transform hover:scale-125 duration-200" />
          </a>
        </div>
      </div>
      <div className="md:col-span-3 md:pl-8 col-span-4 text-center md:text-start px-4 md:px-0">
        <p>
          I am Alex Sison, a dedicated{" "}
          <span className="font-bold text-lime-300">web developer</span> with a
          strong passion for creating efficient, high-performing, and
          user-friendly web applications.
        </p>
        <br />
        <p>
          Before transitioning into web development, I worked as a 3D artist,
          honing my skills in{" "}
          <span className="font-bold text-lime-300">
            visual design, attention to detail, and creative problem-solving
          </span>
          . This background gives me a unique perspective in crafting visually
          appealing and intuitive digital experiences.
        </p>
        <br />
        <p>
          With a keen eye for detail and a commitment to continuous improvement,
          I strive to develop digital solutions that enhance{" "}
          <span className="font-bold text-lime-300">user experience</span> and
          meet modern web standards.
        </p>
        <br />
        My expertise lies in developing{" "}
        <span className="font-bold text-lime-300">
          scalable and optimized web applications
        </span>
        , leveraging modern technologies to build seamless and interactive user
        interfaces. I specialize in{" "}
        <span className="font-bold text-lime-300">Next.js</span>, ensuring
        applications are not only fast and efficient but also maintainable and
        future-proof.
        <div className="mt-16 mb-4 flex flex-col justify-center items-center md:items-start px-16 md:px-0">
          <div>
            <h1 className="text-xl mb-2">Main Stack</h1>
            <div className="flex space-x-2 items-center">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <TbBrandNextjs size={48} />
                  <p>NextJS</p>
                </div>
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <DiReact size={48} />
                  <p>ReactJS</p>
                </div>
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <SiTypescript size={44} />
                  <p>Typescript</p>
                </div>
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <Image
                    src={"/nextauth.png"}
                    alt="nextauth"
                    width={60}
                    height={60}
                    className="px-2 grayscale md:h-12 md:w-16 h-6 w-12"
                  />
                  <p>NextAuth</p>
                </div>
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <SiTailwindcss size={44} />
                  <p>Tailwind</p>
                </div>
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <SiShadcnui size={40} className="pr-2" />
                  <p>ShadcnUI</p>
                </div>
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <SiRedux size={44} />
                  <p>Redux</p>
                </div>
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <SiAmazons3 size={44} className="pl-2" />
                  <p>AWS S3</p>
                </div>
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <TbBrandMongodb size={44} />
                  <p>MongoDB</p>
                </div>
                <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                  <Github size={44} />
                  <p>Github</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl mt-10 mb-2">Other Stack</h1>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
              <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                <DiJavascript1 size={44} />
                <p>Javascript</p>
              </div>
              <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                <Image
                  src={"/clerk.png"}
                  alt="nextauth"
                  width={60}
                  height={60}
                  className="px-2"
                />
                <p>Clerk</p>
              </div>
              <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                <SiFirebase size={40} />
                <p>Firebase</p>
              </div>
              <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                <SiSupabase size={40} />
                <p>Supabase</p>
              </div>
              <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                <SiPrisma size={40} />
                <p>Prisma</p>
              </div>
              <div className="border rounded-xl border-white p-4 flex flex-col justify-center items-center h-[100px] w-[100px] hover:scale-110 duration-300">
                <Image
                  src={"/sanity.png"}
                  alt="nextauth"
                  width={120}
                  height={120}
                  className="object-cover pt-4 pb-2 filter grayscale"
                />
                <p>Sanity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
