"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Stethoscope,
  Menu,
  X,
  LogOut,
  User,
  Settings,
  ChevronDown,
  Home,
  BookOpen,
  Phone,
  Shield,
  FileText,
  Activity,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-blue-50 bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto flex h-15 items-center justify-between px-6 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-200 group-hover:shadow-blue-300 transition-all duration-300 group-hover:scale-105">
            <Stethoscope className="h-7 w-7 text-white" />
          </div>
          <div>
            <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
              MediScan
            </span>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            <Home className="h-5 w-5" />
            হোম
          </Link>
          <Link
            href="/features"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            <Activity className="h-5 w-5" />
            সেবাসমূহ
          </Link>
          <Link
            href="/how-it-works"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            <BookOpen className="h-5 w-5" />
            কীভাবে কাজ করে
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            <Phone className="h-5 w-5" />
            যোগাযোগ
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  লগইন
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  className="text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 px-6 py-3 rounded-xl"
                >
                  রেজিস্ট্রেশন
                </Button>
              </Link>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-12 w-12 rounded-full hover:ring-2 hover:ring-blue-200 transition-all"
                >
                  <Avatar className="h-12 w-12 ring-2 ring-blue-100">
                    <AvatarImage src="/avatar.png" alt="User" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-700 text-white text-lg font-bold">
                      US
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4 text-gray-500 absolute -bottom-1 right-0" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 mt-2" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-2 p-2">
                    <p className="text-lg font-semibold">রহমান খান</p>
                    <p className="text-sm text-gray-500">patient@example.com</p>
                    <span className="inline-block w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      রোগী
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-base py-3 cursor-pointer">
                  <User className="mr-3 h-5 w-5" />
                  আমার প্রোফাইল
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base py-3 cursor-pointer">
                  <FileText className="mr-3 h-5 w-5" />
                  আমার রিপোর্ট
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base py-3 cursor-pointer">
                  <Settings className="mr-3 h-5 w-5" />
                  সেটিংস
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-base py-3 cursor-pointer text-red-600 hover:text-red-700">
                  <LogOut className="mr-3 h-5 w-5" />
                  লগআউট
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="lg"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t-2 border-blue-50 md:hidden bg-white/95 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-6 space-y-2">
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-6 w-6" />
              হোম
            </Link>
            <Link
              href="/features"
              className="flex items-center gap-3 text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Activity className="h-6 w-6" />
              সেবাসমূহ
            </Link>
            <Link
              href="/how-it-works"
              className="flex items-center gap-3 text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-6 w-6" />
              কীভাবে কাজ করে
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-6 w-6" />
              যোগাযোগ
            </Link>

            <div className="pt-4 border-t border-gray-100">
              {!isLoggedIn ? (
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-lg py-6">
                      লগইন
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-blue-700">
                      রেজিস্ট্রেশন
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 text-lg font-medium text-gray-600 rounded-lg px-4 py-3"
                  >
                    <Shield className="h-6 w-6" />
                    ড্যাশবোর্ড
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg text-red-600 py-6"
                  >
                    <LogOut className="mr-3 h-6 w-6" />
                    লগআউট
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
