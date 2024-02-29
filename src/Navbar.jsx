import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="text-black mb-10">
            <ul className="flex gap-10 font-bold bg-tiffany_blue-500 h-10 text-2xl shadow-lg shadow-tiffany_blue-500 items-center text-center">
                <li className="hover:bg-tiffany_blue-400 px-5 rounded-xl">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:bg-tiffany_blue-400 px-5 rounded-xl">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:bg-tiffany_blue-400 px-5 rounded-xl">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
