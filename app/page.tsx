import { FlipWords } from "@/components/ui/flip-words";
const words = ["Frontend", "Backend", "Full Stack"];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center h-[80vh] text-center">
      <div>
        <h1 className="text-7xl font-extrabold font-mono">
          Hi, I&apos;m Alex.
        </h1>
      </div>
      <div className="flex font-mono text-3xl font-extrabold pt-4 text-muted-foreground">
        <p>
          I&apos;m a {""}
          <FlipWords words={words} />
          developer proficient in Next.js.
        </p>
      </div>
    </div>
  );
}
