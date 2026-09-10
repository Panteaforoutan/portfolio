function Navbar() {
    return (
        <nav className="flex items-center justify-between pt-5 px-10">
            <h2 className="h2">Pantea Foroutan </h2>
            <div className="flex gap-4 text-sm font-semibold">
                <a href="#about" className="transition-colors hover:text-(--accent)"> About </a>
                {/* <a href="#skills"> Skills </a> */}
                <a href="#projects" className="transition-colors hover:text-(--accent)"> Projects </a>
                <a href="#experience" className="transition-colors hover:text-(--accent)"> Experience </a>
            </div>
        </nav>
    )
}

export default Navbar
