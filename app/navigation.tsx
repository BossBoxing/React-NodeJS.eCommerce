const Root = [
    ['Home', '/'],
    ['Shop', '/'],
]

export default function Nav() {
    return (
        <>
            <nav className="p-6 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-12">
                <img src='./favicon.ico' width={20} className="ml-5"></img>
                {Root.map(([title, url]) => (
                    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                ))}
            </nav>
        </>
    )
}