
import SectionHeading from '../components/SectionHeading'

function Awards() {
    return (
        <section className="content-section awards-section" id="awards">
            <SectionHeading
                number="04"
                title="RECOGNITION"
                aside="MILESTONES & LEARNING"
            />

            <div className="section-intro">
                <h2>
                    Progress,
                    <br />
                    <span className="muted-heading">documented.</span>
                </h2>

                <p>
                    Certifications, academic milestones, and achievements will
                    live here as they are earned.
                </p>
            </div>

            <div className="awards-placeholder">
        <span className="awards-symbol" aria-hidden="true">
          +
        </span>

                <div>
                    <h3>A space for verified achievements.</h3>
                    <p>
                        Add real certificates, awards, and relevant qualifications,
                        including their dates and issuing organisations.
                    </p>
                </div>

                <span className="placeholder-label">AWAITING ENTRIES</span>
            </div>
        </section>
    )
}

export default Awards
