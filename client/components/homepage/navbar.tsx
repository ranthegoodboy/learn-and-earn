"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavigationLinks from "./navigation-links"; // Assuming you have this component set u
import SearchHeader from "./search-header";
import { UserStatus } from "./user-status";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = false; // Replace with actual auth state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground py-4 sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        {/* Logo and Search - now positioned together */}
        <div className="flex items-center gap-4 flex-1">
          <Link href="/" className="text-2xl font-bold flex-shrink-0">
            LearnHub
          </Link>

          {/* Search Component - now next to logo */}
          <div className="hidden md:flex flex-1 max-w-md">
            <SearchHeader />
          </div>
        </div>

        {/* Navigation Links - desktop */}
        <div className="hidden md:flex items-center">
          <NavigationLinks />
        </div>

        {/* Desktop Auth Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {/* {isAuthenticated ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" className="flex items-center gap-2">
                  <User size={18} />
                  <span className="hidden lg:inline">Dashboard</span>
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="flex items-center gap-2">
                  <LogIn size={18} />
                  <span>Log In</span>
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="secondary">Sign Up</Button>
              </Link>
            </>
          )} */}
          <UserStatus />
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation Menu - simplified without navigation links */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary/20 py-4 absolute top-full left-0 right-0 z-50 animate-fade-in">
          <div className="container flex flex-col gap-4">
            {/* Mobile Search */}
            <div className="py-2">
              <SearchHeader />
            </div>

            {/* Navigation Links - mobile */}
            <div className="py-2">
              <NavigationLinks
                isMobile={true}
                onItemClick={() => setIsMenuOpen(false)}
              />
            </div>

            <div className="flex gap-2 pt-2 border-t border-primary/20">
              {isAuthenticated ? (
                <Link href="/dashboard" className="w-full">
                  <Button className="w-full">Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link href="/login" className="w-1/2">
                    <Button variant="outline" className="w-full">
                      Log In
                    </Button>
                  </Link>
                  <Link href="/register" className="w-1/2">
                    <Button variant="secondary" className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
