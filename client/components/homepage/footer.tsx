import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">LearnHub</h3>
            <p className="text-primary-foreground/80 mb-4">
              Empowering learners worldwide with accessible, quality education.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-secondary transition-colors"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-secondary transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/popular"
                  className="hover:text-secondary transition-colors"
                >
                  Popular Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/instructors"
                  className="hover:text-secondary transition-colors"
                >
                  Instructors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="hover:text-secondary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-secondary transition-colors"
                >
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-secondary transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-secondary transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-secondary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/70 text-sm">
          <p>
            &copy; {new Date().getFullYear()} LearnHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
