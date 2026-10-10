
import SectionHeading from '../components/SectionHeading'

const contactMethods = [
    {
        label: 'EMAIL',
        detail: 'Start an email',
        href: 'mailto:YOUR_EMAIL@example.com',
        symbol: '@',
        external: false,
    },
    {
        label: 'PHONE',
        detail: 'Give me a call',
        href: 'tel:+94XXXXXXXXX',
        symbol: '↗',
        external: false,
    },
    {
        label: 'GITHUB',
        detail: 'Explore my code',
        href: 'https://github.com/YOUR_USERNAME',
        symbol: '</>',
        external: true,
    },
    {
        label: 'LINKEDIN',
        detail: 'Connect professionally',
        href: 'https://www.linkedin.com/in/YOUR_USERNAME/',
        symbol: 'in',
        external: true,
    },
]

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
                                {method.symbol}
                            </span>

                            <span className="contact-method-arrow">↗</span>
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
