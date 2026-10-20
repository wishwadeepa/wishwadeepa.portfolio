
import SectionHeading from '../components/SectionHeading'

const contactMethods = [
    {
        label: 'EMAIL',
        detail: 'Get in touch.',
        href: 'mailto:sharadawishwadeepa01@gmail.com',
        symbol: '@',
        external: false,
    },
    {
        label: 'PHONE',
        detail: '+94 76 132 7370',
        href: 'tel:+94761327370',
        symbol: 'phone',
        external: false,
    },
    {
        label: 'GITHUB',
        detail: 'github.com/wishwadeepa',
        href: 'https://github.com/wishwadeepa',
        symbol: '</>',
        external: true,
    },
    {
        label: 'LINKEDIN',
        detail: 'Connect professionally',
        href: 'https://www.linkedin.com/in/sharada-wishwadeepa-8a12433b7',
        symbol: 'in',
        external: true,
    },
]

function ExternalArrow() {
    return (
        <svg
            className="contact-method-arrow-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M7 17L17 7M8 7H17V16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function PhoneIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M7.2 3.8H5.1A1.6 1.6 0 0 0 3.5 5.5C4.2 13.5 10.5 19.8 18.5 20.5A1.6 1.6 0 0 0 20.2 18.9V16.8L15.8 15.3L14.4 17.2A14.1 14.1 0 0 1 6.8 9.6L8.7 8.2L7.2 3.8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Contact() {
    return (
        <section className="content-section contact-section" id="contact">
            <SectionHeading
                number="05"
                title="CONTACT"
                aside="LET'S CONNECT"
            />

            <p className="eyebrow contact-eyebrow">
                OPEN TO OPPORTUNITIES
            </p>

            <h2>
                Have something
                <br />
                <span className="outline-word">in mind?</span>
            </h2>

            <p className="contact-description">
                I'm interested in meaningful projects, opportunities to learn,
                and conversations about technology and design.
            </p>

            <div className="contact-methods" aria-label="Contact options">
                {contactMethods.map((method) => (
                    <a
                        className="contact-method"
                        href={method.href}
                        key={method.label}
                        target={method.external ? '_blank' : undefined}
                        rel={method.external ? 'noopener noreferrer' : undefined}
                        aria-label={`${method.label}: ${method.detail}`}
                    >
                        <span className="contact-method-top" aria-hidden="true">
                            <span className="contact-method-icon">
                                {method.symbol === 'phone' ? (
                                    <PhoneIcon />
                                ) : (
                                    method.symbol
                                )}
                            </span>

                            <span className="contact-method-arrow">
                                <ExternalArrow />
                            </span>
                        </span>

                        <span>
                            <span className="contact-method-label">
                                {method.label}
                            </span>

                            <span className="contact-method-detail">
                                {method.detail}
                            </span>
                        </span>
                    </a>
                ))}
            </div>

            <div className="contact-bottom">
                <span>SHARADA WISHWADEEPA</span>
                <span>SRI LANKA</span>
                <span>
                    BUILT WITH CURIOSITY <span className="red-word">♥</span>
                </span>
            </div>
        </section>
    )
}

export default Contact
