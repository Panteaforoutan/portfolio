function Footer() {
    return (
        <footer className="box-content w-full px-10 py-6 mt-8">
            <div className="flex justify-center gap-3 pt-3 pb-2">
                <a href="mailto:pforoutan@ucsd.edu" aria-label="Email">
                    <svg className="w-7 h-7 fill-(--text-h) hover:fill-(--accent)" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                </a>

                <a href="https://www.linkedin.com/in/pantea-foroutan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg className="w-7 h-7 fill-(--text-h) hover:fill-(--accent)" viewBox="0 0 24 24">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55z" />
                    </svg>
                </a>
                <a href="https://github.com/PanteaForoutan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg className="w-7 h-7 fill-(--text-h) hover:fill-(--accent)">
                        <use href={`${import.meta.env.BASE_URL}icons.svg#github-icon`} />
                    </svg>
                </a>

            </div>
            <p className="text-center text-xs text-(--text)">
                © {new Date().getFullYear()} Pantea Foroutan
            </p>
        </footer>
    )
}

export default Footer
