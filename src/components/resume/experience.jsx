export default function Experience(props) {
    return (
        <div className="container">
            <ul>Experience</ul>
            {
                props.experience.map((experience) => {
                    return (
                        <li>{experience.company}, {experience.role}, {experience.year}</li>
                    )
                })
            }
        </div>
    )
}