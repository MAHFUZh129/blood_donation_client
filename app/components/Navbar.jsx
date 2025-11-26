"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user)

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged Out Successfully !");
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-3xl italic font-bold text-red-700">
          Donate<span className="text-red-600">Bloo</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link href="/" className="hover:text-red-600 font-bold text-md">Home</Link>
          <Link href="/donors" className="hover:text-red-600 font-bold text-md"> Donors</Link>
          <Link href="/joinAsDonor" className="hover:text-red-600 font-bold text-md">Join as A Donor</Link>
          <Link href="/request-blood" className="hover:text-red-600 font-bold text-md">
            Request Blood
          </Link>
          <Link href="/about" className="hover:text-red-600 font-bold text-md">About</Link>

          {!user && (
            <>
              <Link href="/login" className="bg-red-600 px-4 text-white py-2 font-bold text-xl hover:bg-amber-600">Login</Link>
              <Link href="/register" className="bg-red-600 px-4 text-white py-2 font-bold text-xl hover:bg-amber-600">Register</Link>
            </>
          )} 

          {user && (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 bg-red-500 text-white font-bold text-lg px-3 py-1 rounded hover:bg-red-600"
              >
                
                {user.displayName}
                <span>▼</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-58 bg-white shadow-lg rounded border z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm text-gray-600">Logged in as:</p>
                    <p className="font-bold text-lg ">{user.email}</p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className=" w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden block text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-4">

            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/donors" onClick={() => setMenuOpen(false)}>Donors</Link>
            <Link href="/request-blood" onClick={() => setMenuOpen(false)}>
              Request Blood
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>

            {!user && (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link href="/register" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
              </>
            )}

            {user && (
              <>
                <p className="font-semibold">{user.displayName}</p>
                <button
                  onClick={handleLogout}
                  className="text-left text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
