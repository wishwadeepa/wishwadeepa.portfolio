
const navigationItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'CAPABILITIES', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'AWARDS', href: '#awards' },
    { label: 'CONTACT', href: '#contact' },
]

function Header() {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <header className="site-header">
            <button
                className="identity-mark"
                onClick={goToTop}
                aria-label="Return to top"
            >
                SW<span className="identity-period">.</span>
            </button>

            <a className="header-caption" href="#top">
                PERSONAL PORTFOLIO
                <span>2026 — PRESENT</span>
            </a>

            <nav className="main-nav" aria-label="Main navigation">
                {navigationItems.map((item) => (
                    <a key={item.href} href={item.href}>
                        {item.label}
                        {item.label === 'CONTACT' && <span> ↗</span>}
                    </a>
                ))}
            </nav>

            <a
                className="mobile-contact"
                href="#contact"
                aria-label="Contact"
            >
                ↗
            </a>
        </header>
    )
}

export default Header
