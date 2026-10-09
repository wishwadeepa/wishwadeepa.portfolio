
import { useEffect, useState } from 'react'
import './App.css'

const asset = (filename: string) => `/assets/${filename}`

const skills = [
  {
    number: '01',
    title: 'Full-stack development',
    description:
        'Building complete web experiences, from interface design to server-side logic and data.',
    tags: ['React', 'TypeScript', 'APIs', 'Databases'],
  },
  {
    number: '02',
    title: 'Mobile development',
    description:
        'Developing Android applications with a focus on usability, performance, and reliability.',
    tags: ['Kotlin', 'Android', 'UI architecture'],
  },
  {
    number: '03',
    title: 'UI / UX design',
    description:
        'Turning ideas into thoughtful interfaces through visual systems, prototyping, and iteration.',
    tags: ['Figma', 'Prototyping', 'Design systems'],
  },
]

const projects = [
  {
    number: '01',
    title: 'Numa notes',
    category: 'MOBILE APPLICATION',
    description:
        'A notes app concept exploring contextual connections, thoughtful interaction, and a calmer way to organise knowledge.',
    status: 'IN DEVELOPMENT',
  },
  {
    number: '02',
    title: 'Eco-Sense',
    category: 'ENVIRONMENTAL TECHNOLOGY',
    description:
        'A concept for community-powered environmental monitoring using smartphone sensors and location-aware alerts.',
    status: 'CONCEPT',
  },
  {
    number: '03',
    title: 'More to come',
    category: 'SELECTED WORK',
    description:
        'This space is reserved for another project. Replace it with a finished piece that demonstrates your technical skills.',
    status: 'PLACEHOLDER',
  },
]

function App() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 40)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
      <main>
        <header className="site-header">
          <button
              className="identity-mark"
              onClick={goToTop}
              aria-label="Return to top"
          >
            SW<span className="identity-period">.</span>
          </button>

          <a className="header-caption" href="#top">
            PERSONAL PORTFOLIO
            <span>2026 — PRESENT</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">ABOUT</a>
            <a href="#skills">CAPABILITIES</a>
            <a href="#projects">PROJECTS</a>
            <a href="#awards">AWARDS</a>
            <a href="#contact">CONTACT <span>↗</span></a>
          </nav>

          <a className="mobile-contact" href="#contact" aria-label="Contact">
            ↗
          </a>
        </header>

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
            <div className="portrait-frame">
              <img
                  className="hero-portrait"
                  src={asset('heroBW1.png')}
                  alt="Portrait of Sharada Wishwadeepa"
                  fetchPriority="high"
              />
              <div className="portrait-grain" aria-hidden="true" />
              <span className="portrait-corner portrait-corner-tl" />
              <span className="portrait-corner portrait-corner-br" />
            </div>

            <svg
                className="orbit-type"
                viewBox="0 0 400 400"
                aria-hidden="true"
            >
              <defs>
                <path
                    id="orbit-circle"
                    d="M 200,200 m -153,0 a 153,153 0 1,1 306,0 a 153,153 0 1,1 -306,0"
                />
              </defs>
              <text>
                <textPath href="#orbit-circle">
                  DESIGN WITH INTENTION · BUILD WITH CURIOSITY ·
                  DESIGN WITH INTENTION · BUILD WITH CURIOSITY ·
                </textPath>
              </text>
            </svg>

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

        <section className="content-section about-section" id="about">
          <div className="section-heading">
            <span className="section-number">01 — ABOUT</span>
            <span className="section-rule" />
            <span className="section-aside">A LITTLE CONTEXT</span>
          </div>

          <div className="about-layout">
            <h2>
              I'm Sharada
              <br />
              Wishwadeepa<span className="red-word">.</span>
            </h2>

            <div className="about-copy">
              <p className="about-lead">
                Currently an undergraduate exploring how technology and
                design can come together to solve meaningful problems.
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

        <section className="content-section skills-section" id="skills">
          <div className="section-heading">
            <span className="section-number">02 — CAPABILITIES</span>
            <span className="section-rule" />
            <span className="section-aside">WHAT I'M EXPLORING</span>
          </div>

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
            * Technologies listed reflect areas of focus, not necessarily
            professional-level proficiency.
          </p>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-heading">
            <span className="section-number">03 — SELECTED WORK</span>
            <span className="section-rule" />
            <span className="section-aside">THINKING MADE TANGIBLE</span>
          </div>

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
                    <span className="project-category">{project.category}</span>
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
            Project descriptions are introductory summaries. Add repository
            links, live demos, screenshots, and verified outcomes as each
            project becomes ready to present.
          </p>
        </section>

        <section className="content-section awards-section" id="awards">
          <div className="section-heading">
            <span className="section-number">04 — RECOGNITION</span>
            <span className="section-rule" />
            <span className="section-aside">MILESTONES & LEARNING</span>
          </div>

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
                Replace this area with real certificates, awards, and
                relevant qualifications. Include dates and issuing
                organisations.
              </p>
            </div>
            <span className="placeholder-label">AWAITING ENTRIES</span>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-heading">
            <span className="section-number">05 — CONTACT</span>
            <span className="section-rule" />
            <span className="section-aside">LET'S CONNECT</span>
          </div>

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

          <a className="contact-link" href="mailto:YOUR_EMAIL@example.com">
            GET IN TOUCH <span>↗</span>
          </a>

          <div className="contact-bottom">
            <span>SHARADA WISHWADEEPA</span>
            <span>SRI LANKA</span>
            <span>BUILT WITH CURIOSITY <span className="red-word">♥</span></span>
          </div>
        </section>

        <footer className="site-footer">
          <button className="footer-mark" onClick={goToTop}>
            SW<span className="red-word">.</span>
          </button>
          <span>© 2026 SHARADA WISHWADEEPA</span>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </main>
  )
}

export default App
