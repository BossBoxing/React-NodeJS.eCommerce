

export default function Navbar() {
    return (
        <div className="container">
            <nav>
                <div className="justify-left">
                    <p className="text-black text-xl font-semibold">e-Commerce</p>
                </div>
                <div className="justify-right">
                    <ul>
                        <li><a href="" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Home</a></li>
                        <li><a href="" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">News</a></li>
                        <li><a href="" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Contact</a></li>
                        <li><a href="" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">About</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}