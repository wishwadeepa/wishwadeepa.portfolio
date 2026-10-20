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

            <div className="awards-placeholder awards-empty-state">
                <span className="placeholder-label">YET TO SHOWCASE</span>
            </div>
        </section>
    )
}

export default Awards
