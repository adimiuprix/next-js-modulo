'use client'
import Link from "next/link"

const NavBar = () => {

    return(
        <>
            <div className="container navbar bg-primary text-primary-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href="/" className="text-blue-500 hover:text-gray-300">Beranda</Link></li>
                            <li>
                                <a>Parshing Data</a>
                                <ul className="p-2">
                                    <li><Link href="/parshing" className="text-blue-500 hover:text-gray-300">Parshing</Link></li>
                                    <li><Link href="/array" className="text-blue-500 hover:text-gray-300">Array</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="text-xl btn btn-ghost">Next Modulo</a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        <li><Link href="/" className="text-blue-500 hover:text-gray-300">Beranda</Link></li>
                        <li>
                            <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><Link href="/parshing" className="text-blue-500 hover:text-gray-300">Parshing</Link></li>
                                <li><Link href="/array" className="text-blue-500 hover:text-gray-300">Array</Link></li>
                            </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar