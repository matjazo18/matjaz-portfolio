"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "zaćetek", path: "/" },
  { name: "izkušnje", path: "/services" },
  { name: "CV", path: "/cv" },
  { name: "projekti", path: "/projekti" },
  { name: "kontakti", path: "/kontakti" },
];
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className=" flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent translate-all  `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
