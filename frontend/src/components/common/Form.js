import './Form.scss'
import {useState} from 'react'


const Form = (props) => {

    const data = props.data
    const setData = props.setData
    const fields = props.fields
    const route = props.route
    const handleSubmit = props.submit;
    

    const generateFields = (fields, data, setData) => {
        return fields.map((field, index) => {
            const fieldKey = field.value
                return (
                    <div  key={index}>
                    
                        <label htmlFor={field.name}>{field.name}</label> <br></br>
                        <input 
                            onChange={(e) => setData({...data, [fieldKey]: e.target.value})}
                            type={field.type} 
                            id={field.name} 
                            name={field.name} 
                            placeholder={field.placeholder}
                            value={data[fieldKey] || ''}>
                        </input>
                    </div>
                )
            }
        )
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e, route)}className='form-main'>

            {fields && generateFields(fields, data, setData)}
            <button type='submit'>{props.button}</button>

        </form>
    )
}

export default Form