export default function Education(props) {
    return (
        <div className="container">
            <ul>Education</ul>
            {
                props.education.map((education) => {
                    return (
                        <li>{education.school}, {education.address}, {education.year}</li>
                    )
                })
            }
        </div>
    )
}