import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Sison | Porfolio",
  description: "Alex Sison Portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="border border-muted-foreground rounded-xl">
        <video
          src="/techhub.mp4"
          muted
          loop
          autoPlay={true}
          className="rounded-t-xl"
        />
        <p className="flex justify-center mt-4 text-xl font-mono font-bold">
          <a
            href="https://techhub-snowy.vercel.app/"
            target="_blank"
            className="hover:underline-offset-4 hover:underline animate-pulse duration-30000"
          >
            TechHub
          </a>
        </p>
        <p className="text-muted-foreground text-center mt-2 font-mono lg:px-12 pb-4 text-sm px-4">
          A modern e-commerce website using{" "}
          <span className="text-lime-300 font-bold">Next.js,</span>{" "}
          <span className="text-lime-300 font-bold">
            NextAuth for authentication
          </span>{" "}
          <span className="text-lime-300 font-bold">
            , Tailwind CSS and Shadcn UI for styling
          </span>
          , and <span className="text-lime-300 font-bold">Redux Toolkit</span>{" "}
          for state management.{" "}
          <span className="text-lime-300 font-bold">
            React Query handles efficient data fetching
          </span>{" "}
          , while <span className="text-lime-300 font-bold">MongoDB</span>{" "}
          stores product, user, and order data. Payments are processed securely
          via <span className="text-lime-300 font-bold">Stripe</span>, and{" "}
          <span className="text-lime-300 font-bold">AWS S3</span> is used for
          image storage. The site includes full{" "}
          <span className="text-lime-300 font-bold">
            CRUD operations through REST APIs
          </span>
          , enabling <span className="text-lime-300 font-bold">seamless</span>{" "}
          product management, order processing, and user authentication.
        </p>
      </div>
    </div>
  );
}
