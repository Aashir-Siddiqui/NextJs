"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">

                <Link href="/" className="text-xl font-bold tracking-wide">
                    Aashir<span className="text-blue-500">Dev</span>
                </Link>

                <div className="hidden md:flex gap-6">
                    <Link href="/" className="hover:text-blue-400 transition">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-blue-400 transition">
                        About
                    </Link>
                    <Link href="/services" className="hover:text-blue-400 transition">
                        Services
                    </Link>
                    <Link href="/csr" className="hover:text-blue-400 transition">
                        CSR
                    </Link>
                    <Link href="/ssr" className="hover:text-blue-400 transition">
                        SSR
                    </Link>
                </div>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 py-4 flex flex-col gap-4">
                    <Link href="/" className="hover:text-blue-400 transition">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-blue-400 transition">
                        About
                    </Link>
                    <Link href="/services" className="hover:text-blue-400 transition">
                        Services
                    </Link>
                </div>
            )}
        </nav>
    );
}
