
import { useEffect, useState } from 'react'

function Hero() {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 40)
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section className="hero" id="top">
            <div className="hero-grid" aria-hidden="true" />

            <div className="hero-copy">
                <p className="eyebrow">
                    <span className="status-dot" />
                    ICT UNDERGRADUATE · SRI LANKA
                </p>

                <h1>
                    Curious
                    <br />
                    by <span className="outline-word">nature.</span>
                    <br />
                    <span className="red-word">Precise</span>
                    <br />
                    by design.
                </h1>

                <p className="hero-description">
                    Exploring the intersection of technology, thoughtful design,
                    and the small details that make a difference.
                </p>

                <a className="text-link" href="#projects">
                    EXPLORE MY WORK <span>↗</span>
                </a>

                <div className="hero-index">
                    <span>01 / 06</span>
                    <span>INDEPENDENT THINKING. INTENTIONAL MAKING.</span>
                </div>
            </div>

            <div className="hero-visual">
                <svg
                    className="orbit-type"
                    viewBox="0 0 500 500"
                    aria-hidden="true"
                >
                    <defs>
                        <path
                            id="orbit-circle"
                            d="M 250,250 m -190,0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0"
                        />
                    </defs>

                    <text>
                        <textPath
                            href="#orbit-circle"
                            startOffset="0%"
                            textLength="1194"
                            lengthAdjust="spacing"
                        >
                            * UI/UX DESIGNER * FULL STACK WEB DEVELOPER * MOBILE APP DEVELOPER .
                        </textPath>
                    </text>
                </svg>

                <img
                    className="hero-portrait"
                    src="/assets/heroBW1.png"
                    alt="Portrait of Sharada Wishwadeepa"
                    fetchPriority="high"
                />

                <div className="visual-crosshair" aria-hidden="true">
                    <span />
                    <span />
                </div>

                <div className="visual-label">
                    <span>FIG. 001</span>
                    <span>AN EXERCISE IN CURIOSITY</span>
                </div>
            </div>

            <a
                className={`scroll-cue ${hasScrolled ? 'scroll-cue-hidden' : ''}`}
                href="#about"
                aria-label="Scroll to about section"
                tabIndex={hasScrolled ? -1 : 0}
            >
                <span>SCROLL TO DISCOVER</span>
                <span className="scroll-arrow">↓</span>
            </a>

            <span className="hero-side-label" aria-hidden="true">
        OBSERVE · QUESTION · CREATE
      </span>
        </section>
    )
}

export default Hero