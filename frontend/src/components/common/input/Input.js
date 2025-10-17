import './Input.scss'
import {useFormContext} from 'react-hook-form'
const Input = ({label, name, type, placeholder, setData}) => {
    const { 
        register , 
        formState: { errors }
    } = useFormContext()

    return (
        <div className='input-main'>
            <label htmlFor={name}> {label} </label> <br></br>
            <input 
            
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={setData}
                {...register(label, {
                    required: true,
                    message: 'This field is required'
                })}
                
                />

        </div>
    )
}



export default Input