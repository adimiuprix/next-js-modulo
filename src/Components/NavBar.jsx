const NavBar = () => {
    return(
        <>
        <nav className="p-4 bg-blue-500">
            <div className="container flex justify-between items-center mx-auto">
                <a href="#" className="text-lg font-semibold text-white">Next Modulo</a>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:text-gray-300">Beranda</a></li>
                    <li><a href="/parshing" className="text-white hover:text-gray-300">Parshing</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar