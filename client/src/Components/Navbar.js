import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="flex ml-1 mr-1 rounded-[15px] h-[5rem] items-center bg-indigo-200">

                    <Link to="/" className="ml-3 rounded p-1 bg-slate-400">E-Commerce</Link>
                    <Link to="/product" className="ml-5 rounded bg-slate-950 hover:bg-slate-700 p-1 text-white">Product</Link>
            </div>
            <Outlet />
        </>
    );
}