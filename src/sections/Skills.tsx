
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/portfolio'

function Skills() {
    return (
        <section className="content-section skills-section" id="skills">
            <SectionHeading
                number="02"
                title="CAPABILITIES"
                aside="WHAT I'M EXPLORING"
            />

            <div className="section-intro">
                <h2>
                    Ideas into
                    <br />
                    <span className="muted-heading">working things.</span>
                </h2>

                <p>
                    Three areas where I'm developing practical skills and
                    building a stronger foundation.
                </p>
            </div>

            <div className="skills-list">
                {skills.map((skill) => (
                    <article className="skill-item" key={skill.number}>
                        <span className="item-number">{skill.number}</span>

                        <div className="skill-main">
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>

                            <div className="skill-tags">
                                {skill.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <span className="item-arrow" aria-hidden="true">
              ↗
            </span>
                    </article>
                ))}
            </div>

            <p className="section-footnote">
                Technologies listed reflect areas of focus, not necessarily
                professional-level proficiency.
            </p>
        </section>
    )
}

export default Skills
