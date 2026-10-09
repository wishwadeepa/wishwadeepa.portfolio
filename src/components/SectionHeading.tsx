
type SectionHeadingProps = {
    number: string
    title: string
    aside?: string
}

function SectionHeading({
                            number,
                            title,
                            aside,
                        }: SectionHeadingProps) {
    return (
        <div className="section-heading">
      <span className="section-number">
        {number} — {title}
      </span>

            <span className="section-rule" aria-hidden="true" />

            {aside && <span className="section-aside">{aside}</span>}
        </div>
    )
}

export default SectionHeading
