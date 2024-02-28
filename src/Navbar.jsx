import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul className="flex gap-10 font-bold bg-slate-400">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
