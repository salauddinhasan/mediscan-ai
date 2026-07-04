import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
} from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white">
                  MediScan
                </span>
                <span className="text-2xl font-extrabold text-blue-400">
                  AI
                </span>
              </div>
            </Link>
            <p className="text-base leading-relaxed text-gray-400">
              আপনার স্বাস্থ্য রেকর্ড এখন সম্পূর্ণ ডিজিটাল ও নিরাপদ। প্রেসক্রিপশন
              স্ক্যান করে পেয়ে যান সম্পূর্ণ মেডিকেল হিস্ট্রি।
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 hover:bg-[#1877F2] transition-all duration-300"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 hover:bg-[#333] transition-all duration-300"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 hover:bg-[#0A66C2] transition-all duration-300"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-3">
              {[
                { name: "আমাদের সম্পর্কে", href: "/about" },
                { name: "সেবাসমূহ", href: "/features" },
                { name: "কীভাবে কাজ করে", href: "/how-it-works" },
                { name: "মূল্য পরিকল্পনা", href: "/pricing" },
                { name: "সচরাচর জিজ্ঞাসা", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-base text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white">আমাদের সেবা</h3>
            <ul className="space-y-3">
              {[
                { name: "প্রেসক্রিপশন স্ক্যান", href: "/features/scan" },
                { name: "মেডিসিন ট্র্যাকার", href: "/features/medicine" },
                { name: "টেস্ট রিপোর্ট বিশ্লেষণ", href: "/features/tests" },
                {
                  name: "অ্যান্টিবায়োটিক মনিটরিং",
                  href: "/features/antibiotic",
                },
                { name: "ডক্টর ড্যাশবোর্ড", href: "/features/doctor" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-base text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white">যোগাযোগ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-base text-gray-400">
                  ১২৩, ধানমন্ডি, ঢাকা-১২০৫, বাংলাদেশ
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <span className="text-base text-gray-400">
                  +৮৮০ ১৭০০-০০০০০০
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <span className="text-base text-gray-400">
                  info@mediscanai.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-base font-semibold text-white mb-3">
                নিউজলেটার সাবস্ক্রাইব করুন
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="আপনার ইমেইল"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-11"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 h-11 px-4">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-gray-500 flex items-center gap-1">
              &copy; {new Date().getFullYear()} MediScan AI. সর্বস্বত্ব
              সংরক্ষিত। তৈরি করেছে
              <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" />
              দিয়ে বাংলাদেশে
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-base text-gray-500 hover:text-blue-400 transition-colors"
              >
                গোপনীয়তা নীতি
              </Link>
              <Link
                href="/terms"
                className="text-base text-gray-500 hover:text-blue-400 transition-colors"
              >
                শর্তাবলী
              </Link>
              <Link
                href="/sitemap"
                className="text-base text-gray-500 hover:text-blue-400 transition-colors"
              >
                সাইটম্যাপ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
