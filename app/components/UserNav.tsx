"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { navlinks } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserNav() {
  const pathName = usePathname();
  return (
    <div className="md:hidden flex">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            {navlinks.map((link, idx) => (
              <DropdownMenuItem key={idx} className="flex justify-center">
                <Link
                  href={link.href}
                  className={`${
                    pathName === link.href
                      ? "font-bold font-mono"
                      : "text-muted-foreground font-mono"
                  }`}
                >
                  {link.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
