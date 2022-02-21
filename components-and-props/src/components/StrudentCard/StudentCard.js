import './StudentCard.css'

const StudentCard = ({ image, name, details, age }) => {

    return (
        <article className="studentCard">
            <img src={image} alt="Sara" />
            <h3>{name} ({age} años)</h3>
            <hr />
            <footer>
                <p>{details.campus}</p>
                <p>Bootcamp {details.cohort}</p>
                <p>Año {details.year}</p>
            </footer>
        </article>
    )
}

export default StudentCard