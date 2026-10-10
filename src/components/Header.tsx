
import { useState } from 'react'

const navigationItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'CAPABILITIES', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'AWARDS', href: '#awards' },
    { label: 'CONTACT', href: '#contact' },
]

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setMenuOpen(false)
    }

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="site-header">
            <button
                className="identity-mark"
                onClick={goToTop}
                aria-label="Return to top"
            >
                SW<span className="identity-period">.</span>
            </button>

            <a className="header-caption" href="#top" onClick={closeMenu}>
                PERSONAL PORTFOLIO
                <span>2026 — PRESENT</span>
            </a>

            <nav className="main-nav" aria-label="Main navigation">
                {navigationItems.map((item) => (
                    <a key={item.href} href={item.href}>
                        {item.label}
                        {item.label === 'CONTACT' && (
                            <span aria-hidden="true"> ↗</span>
                        )}
                    </a>
                ))}
            </nav>

            <button
                className="mobile-menu-toggle"
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMenuOpen((open) => !open)}
            >
                {menuOpen ? (
                    <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M6 6L18 18M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>
                ) : (
                    <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M4 7H20M4 12H20M4 17H20"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>
                )}
            </button>

            {menuOpen && (
                <nav
                    className="mobile-navigation"
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                >
                    {navigationItems.map((item, index) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                        >
                            <span className="mobile-navigation-number">
                                0{index + 1}
                            </span>
                            <span>{item.label}</span>
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M7 17L17 7M8 7H17V16"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    ))}
                </nav>
            )}
        </header>
    )
}

export default Header
