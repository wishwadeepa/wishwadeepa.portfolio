
import SectionHeading from '../components/SectionHeading'

function About() {
    return (
        <section className="content-section about-section" id="about">
            <SectionHeading
                number="01"
                title="ABOUT"
                aside="A LITTLE CONTEXT"
            />

            <div className="about-layout">
                <h2>
                    I'm Sharada
                    <br />
                    Wishwadeepa<span className="red-word">.</span>
                </h2>

                <div className="about-copy">
                    <p className="about-lead">
                        Pursuing an Honours degree in Information and Communication Technology at the University of Colombo, with an interest in thoughtful design and practical technology.
                    </p>

                    <p>
                        I pay attention to the details others might overlook: the
                        behaviour of an interface, the logic behind a system, and
                        the subtle decisions that shape an experience.
                    </p>

                    <p>
                        I'm interested in building things that are not only
                        functional, but considered, intuitive, and genuinely useful.
                    </p>

                    <div className="about-signature">
                        <span className="signature-mark">SW.</span>
                        <span>ALWAYS LEARNING. ALWAYS REFINING.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
