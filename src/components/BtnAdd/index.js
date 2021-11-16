import './style.css'

const BtnAdd = ({text, onClick}) => {
    return <div><button className='btton' onClick={onClick}>{text}</button></div>
}

export default BtnAdd