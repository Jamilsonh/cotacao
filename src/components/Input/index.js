const Input = ({onChange, label, value}) => {
    return <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={label}/>
}

export default Input