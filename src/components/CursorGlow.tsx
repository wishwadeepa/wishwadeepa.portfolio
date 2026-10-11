
import { useEffect, useRef } from 'react'

function CursorGlow() {
    const ambienceRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ambience = ambienceRef.current
        if (!ambience) return

        const finePointer = window.matchMedia(
            '(hover: hover) and (pointer: fine)'
        )
        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        )

        if (!finePointer.matches || reducedMotion.matches) return

        let frame = 0
        let x = window.innerWidth / 2
        let y = window.innerHeight / 2

        const update = () => {
            ambience.style.setProperty('--cursor-x', `${x}px`)
            ambience.style.setProperty('--cursor-y', `${y}px`)
            frame = 0
        }

        const handlePointerMove = (event: PointerEvent) => {
            if (event.pointerType === 'touch') return

            x = event.clientX
            y = event.clientY

            const target = document.elementFromPoint(x, y)

            // The navbar is excluded visually through its higher stacking layer.
            const isRed = Boolean(
                target?.closest('.contact-section, .site-footer')
            )

            ambience.dataset.surface = isRed ? 'red' : 'light'

            if (frame === 0) {
                frame = window.requestAnimationFrame(update)
            }
        }

        window.addEventListener('pointermove', handlePointerMove, {
            passive: true,
        })

        return () => {
            window.removeEventListener('pointermove', handlePointerMove)
            if (frame) window.cancelAnimationFrame(frame)
        }
    }, [])

    return (
        <div
            ref={ambienceRef}
            className="cursor-ambience"
            data-surface="light"
            aria-hidden="true"
        >
            <div className="cursor-ambience__glow" />
            <div className="cursor-ambience__dots" />
        </div>
    )
}

export default CursorGlow
