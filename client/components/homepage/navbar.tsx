"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SearchHeader from "./search-header";
import { UserStatus } from "./user-status";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4 flex-1">
          <Link href="/" className="text-2xl font-bold flex-shrink-0">
            LearnHub
          </Link>

          <div className="hidden md:flex flex-1 max-w-md">
            <SearchHeader />
          </div>
        </div>

        {/* Navigation Links - desktop */}
        {/* <div className="hidden md:flex items-center">
          <NavigationLinks />
        </div> */}

        <div className="hidden md:flex items-center gap-2">
          <UserStatus />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary/20 py-4 absolute top-full left-0 right-0 z-50 animate-fade-in">
          <div className="container flex flex-col gap-4">
            <div className="py-2">
              <SearchHeader />
            </div>
            <div className="flex gap-2 pt-2 border-t border-primary/20">
              <UserStatus />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
