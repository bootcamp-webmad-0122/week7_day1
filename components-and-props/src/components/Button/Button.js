import './Button.css'

const Button = props => {

    const { aspect, text, link } = props

    let styleClass = ''

    if (aspect === 'corporative') {
        styleClass = 'blue'
    }

    if (aspect === 'black') {
        styleClass = 'dark'
    }

    if (aspect === 'transparent') {
        styleClass = 'clear'
    }

    return (
        <a href={link} target="_blank" className={`button ${styleClass}`}>{text}</a>
    )
}

export default Button