

export default function Navbar() {
    return (
        <nav className="flex sm:justify-center space-x-4">
            <ul>
                <li><a href="" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</a></li>
                <li><a href="" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">News</a></li>
                <li><a href="" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Contact</a></li>
                <li><a href="" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">About</a></li>
            </ul>
        </nav>
    );
}