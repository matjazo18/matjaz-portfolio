"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Blog", path: "/blog" },
  { name: "CV", path: "/cv" },
  { name: "Projects", path: "/projekti" },
  { name: "Contacts", path: "/kontakti" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className=" flex justifty-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col  ">
        <div className=" mt-40 mb-32 text-center text-2xl">
          <Link href="/">
            <h1 className="font-semibold text-white">
              Matjaž<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <SheetTitle></SheetTitle>
        <div className="flex flex-col justify-center gap-8">
          {links.map((link, index) => {
            return (
              <div
                className=" flex flex-col justify-center items-center text-accent"
                key={index}
              >
                <SheetClose asChild>
                  <Link
                    href={link.path}
                    className={` ${
                      link.path === pathname &&
                      "text-accent border-b-2 border-accent"
                    }text-xl capitalize hover:text-accent transition-all`}
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
