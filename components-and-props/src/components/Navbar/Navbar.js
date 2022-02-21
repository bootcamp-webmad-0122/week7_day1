import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/contacto">Contacto</a>
                </li>
            </ul>

            <div>
                <Button text="Contacto" aspect="clear" link="/contacto" />
                <Button text="Cursos" aspect="corporative" link="/cursos" />
            </div>

        </nav>
    )
}

export default Navbar