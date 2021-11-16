import './style.css'

const Button = ({text, onClick}) => {
    return <div className='div'><button className='button' onClick={onClick}>{text}</button></div>
}

export default Button