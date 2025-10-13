import './Input.scss'

const Input = ({label, name, type, placeholder, setData}) => {
    return (
        <div className='input-main'>
            <label htmlFor={name}> {label} </label> <br></br>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={setData}></input>
        </div>
    )
}

export default Input