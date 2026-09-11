import { useState, useEffect } from "react"
import { Sun, Moon } from 'lucide-react'
function Navbar() {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('theme')
        if (stored) return stored === 'dark'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <nav className="flex items-center justify-between pt-5 px-10">
            <h2 className="h2">Pantea Foroutan </h2>
            <div className="flex gap-4 text-sm font-semibold">
                <a href="#about" className="transition-colors hover:text-(--accent)"> About </a>
                <a href="#projects" className="transition-colors hover:text-(--accent)"> Projects </a>
                <a href="#experience" className="transition-colors hover:text-(--accent)"> Experience </a>

                <button onClick={() => setIsDark(!isDark)} aria-label="Toggle dark mode">
                    {isDark ? <Sun className="w-5 h-5 text-(--text-h) hover:fill-(--accent)" /> : <Moon className="w-5 h-5 text-(--text-h) hover:fill-(--accent)" />}
                </button>

            </div>
        </nav>
    )
}

export default Navbar
