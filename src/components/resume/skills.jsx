export default function Skills(props) {
    return (
        <div className="container">
            <ul>Skills</ul>
            {
                props.skills.map((skill) => {
                    return (
                        <li>{skill}</li>
                    )
                })
            }
        </div>
    )
}