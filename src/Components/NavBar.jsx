'use client'
import React, { useState } from 'react'
import Link from "next/link"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <nav className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="text-2xl font-bold text-white">
                        <Link href="/" className="hover:text-gray-200">Next Modulo</Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-white hover:text-gray-200 transition-colors duration-200">Beranda</Link>
                        <div className="relative group">
                            <button className="text-white hover:text-gray-200 flex items-center transition-colors duration-200">
                                Fetching
                                <svg
                                    className="w-5 h-5 ml-1 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            <ul className="absolute left-0 mt-3 w-48 bg-white rounded-lg shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-top">
                                <li>
                                    <Link href="/parshing" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-t-lg">
                                    Data single
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/array" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">
                                    Data Array
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="relative group">
                            <button className="text-white hover:text-gray-200 flex items-center transition-colors duration-200">
                                Prisma
                                <svg
                                    className="w-5 h-5 ml-1 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            <ul className="absolute left-0 mt-3 w-48 bg-white rounded-lg shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-top">
                                <li>
                                    <Link href="/prisma/tampil" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-t-lg">
                                    Tampil
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/prisma/buat" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">
                                    Buat
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                <div className="md:hidden">
                    <Link href="#" className="block px-4 py-2 text-white hover:bg-blue-600 transition-colors duration-200">Beranda</Link>
                    <div className="relative group">
                        <button className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition-colors duration-200">
                            Fetching
                        </button>
                        <ul className="bg-blue-600">
                            <li>
                                <Link href="/parshing" className="block px-4 py-2 text-white hover:bg-blue-700">Single data</Link>
                            </li>
                            <li>
                                <Link href="/array" className="block px-4 py-2 text-white hover:bg-blue-700">Data array</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="relative group">
                        <button className="block w-full text-left px-4 py-2 text-white hover:bg-blue-600 transition-colors duration-200">
                            Fetching
                        </button>
                        <ul className="bg-blue-600">
                            <li>
                                <Link href="/prisma/tampil" className="block px-4 py-2 text-white hover:bg-blue-700">Tampil</Link>
                            </li>
                            <li>
                                <Link href="/prisma/buat" className="block px-4 py-2 text-white hover:bg-blue-700">Buat</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                )}
            </nav>
        </>
    )
}

export default NavBar