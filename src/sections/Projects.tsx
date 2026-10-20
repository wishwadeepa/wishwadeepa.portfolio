import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/portfolio'

function Projects() {
    return (
        <section className="content-section projects-section" id="projects">
            <SectionHeading
                number="03"
                title="SELECTED WORK"
                aside="THINKING MADE TANGIBLE"
            />

            <div className="section-intro projects-intro">
                <h2>
                    Made with
                    <br />
                    <span className="muted-heading">intention.</span>
                </h2>

                <p>
                    Projects, experiments, and ideas that turn curiosity into
                    something concrete.
                </p>
            </div>

            <div className="projects-list">
                {projects.map((project) => {
                    const cardContent = (
                        <>
                            <div className="project-number">{project.number}</div>

                            <div className="project-copy">
                                <span className="project-category">
                                    {project.category}
                                </span>

                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>

                            <div className="project-meta">
                                <span>{project.status}</span>
                                {project.href && (
                                    <span className="project-arrow" aria-hidden="true">
                                        ↗
                                    </span>
                                )}
                            </div>
                        </>
                    )

                    return project.href ? (
                        <a
                            className="project-item"
                            href={project.href}
                            key={project.number}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                            aria-label={`${project.title} — open live project in a new tab`}
                        >
                            {cardContent}
                        </a>
                    ) : (
                        <article className="project-item" key={project.number}>
                            {cardContent}
                        </article>
                    )
                })}
            </div>

            <p className="section-footnote">
                Selected work reflects projects at different stages of development.
            </p>
        </section>
    )
}

export default Projects
