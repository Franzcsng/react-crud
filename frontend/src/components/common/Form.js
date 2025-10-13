import './Form.scss'
import Input from './input/Input.js'
import {useState} from 'react'


const Form = (props) => {
    
    const data = props.data //data state variable to hold values of inputs before submit
    const setData = props.setData //set function of data state hook to set values to state variable
    const fields = props.fields //object array containing field information (type, label, name, etc.) to be passed into input component
    const handleSubmit = props.submit; //handleSubmit function declared from parent component
    
    // Generate number of input fields depending on contents of object array "fields" props
    const generateFields = (fields, data, setData) => {
        return fields.map((field, index) => {
            const fieldKey = field.value
                return (
                    <div  key={index}>
                        <Input
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            setData={(e) => setData({...data, [fieldKey]: e.target.value})}
                        />
                    </div>
                )
            }
        )
    }


    return (
        <form onSubmit={(e)=>handleSubmit(e)}className='form-main'>

            {fields && generateFields(fields, data, setData)}
            <button type='submit'>{props.button}</button>

        </form>
    )
}

export default Form