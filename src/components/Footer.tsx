
const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="site-footer">
            <button
                className="footer-mark"
                onClick={goToTop}
                aria-label="Return to top"
            >
                SW<span className="red-word">.</span>
            </button>

            <span>© {CURRENT_YEAR} SHARADA WISHWADEEPA</span>

            <a href="#top" onClick={goToTop}>
                BACK TO TOP ↑
            </a>
        </footer>
    )
}

export default Footer
