"use client";

import Link from "next/link";

interface NavigationLinksProps {
  isMobile?: boolean;
  className?: string;
  onItemClick?: () => void;
}

const NavigationLinks = ({
  isMobile = false,
  className = "",
  onItemClick = () => {},
}: NavigationLinksProps) => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/v2", label: "V2 Design" },
    { path: "/v3", label: "V3 Design" },
    { path: "/v4", label: "V4 Design" },
  ];

  return (
    <div
      className={`${
        isMobile ? "flex flex-col gap-2" : "flex gap-1 md:gap-2"
      } ${className}`}
    >
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          onClick={onItemClick}
          className={`${
            isMobile
              ? "py-2 px-4 w-full text-left hover:bg-primary/10"
              : "px-3 py-2 text-sm rounded-md hover:bg-primary/10"
          } transition-colors font-medium`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinks;
