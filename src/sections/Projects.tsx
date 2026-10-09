
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
                {projects.map((project) => (
                    <article className="project-item" key={project.number}>
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
                            <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
                        </div>
                    </article>
                ))}
            </div>

            <p className="section-footnote">
                Add repository links, live demos, screenshots, and verified
                outcomes as each project becomes ready to present.
            </p>
        </section>
    )
}

export default Projects
