import './Input.scss'
import {useFormContext} from 'react-hook-form'
import { findInputError, isFormValid } from '../../../helpers/utils/utils'

const Input = ({label, name, type, placeholder, setData, validation, }) => {
    const { 
        register , 
        formState: { errors }
    } = useFormContext()

    const inputError =  findInputError(errors, label)
    const isInvalid = isFormValid(inputError)

    return (
        <div className='input-main'>
            {isInvalid && (
                <p style={{color: 'red'}}>{inputError.error.message}</p>
            )}
            <label htmlFor={name}> {label} </label> <br></br>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder}  
                {...register(
                    label, 
                    validation
                )} 
            />

        </div>
    )
}



export default Input