
import SectionHeading from '../components/SectionHeading'

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

            <a
                className="contact-link"
                href="mailto:YOUR_EMAIL@example.com"
            >
                GET IN TOUCH <span>↗</span>
            </a>

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
