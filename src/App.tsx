
import Header from './components/Header'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Awards from './sections/Awards'
import Contact from './sections/Contact'

import './App.css'

function App() {
    return (
        <>
            <CursorGlow />
            <Header />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Awards />
                <Contact />
            </main>

            <Footer />
        </>
    )
}

export default App
