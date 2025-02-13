"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-4xl mx-auto flex justify-between items-center border-b h-[10vh] px-4 lg:px-0">
      <div>
        <Link href={"/"}>
          <h1 className="text-3xl font-mono font-extrabold tracking-wide">
            alexsison.
          </h1>
        </Link>
      </div>
      <div className="md:inline-flex space-x-2 border px-4 py-2 rounded-md font-mono hidden">
        {navlinks.map((link, idx) => (
          <div key={idx}>
            <Link
              href={link.href}
              className={`items-center flex hover:bg-muted px-2 py-1 rounded-md ${
                pathname === link.href
                  ? "font-extrabold"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
