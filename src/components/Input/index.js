import './style.css'

const Input = ({onChange, label, value}) => {
    return <div ><input className='edit' value={value} onChange={(e) => onChange(e.target.value)} placeholder={label}/></div>
}

export default Input