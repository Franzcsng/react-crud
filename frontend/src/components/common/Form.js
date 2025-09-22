import './Form.scss'
import {useState} from 'react'
import axios from 'axios'

const Form = (props) => {

    const [data, setData] = useState(props.data)
    const fields = props.fields
    const route = props.route

    const setUpdate = props.checkUpdate

    const generateFields = (fields, data, setData) => {
        return fields.map((field, index) => {
            const fieldKey = field.value
                return (
                    <div  key={index}>
                    
                        <label htmlFor={field.name}>{field.name}</label>
                        <input 
                            onChange={(e) => setData({...data, [fieldKey]: e.target.value})}
                            type={field.type} 
                            id={field.name} 
                            name={field.name} 
                            placeholder={field.placeholder}
                            value={field.itemValue && field.itemValue}>

                           

                        </input>
                    </div>
                )
            }
        )
    }

    const handleSubmit = (e, route) => {
        e.preventDefault()
        
        axios.post(`http://localhost:5000${route}`, data)
        .then((res) => {
            setUpdate(true)
            console.log(`Successfully added the following: ${res}`)
        })
        .catch((err) => console.log(err))
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e, route)}className='form-main'>

            {fields && generateFields(fields, data, setData)}
            <button type='submit'>{props.button}</button>

        </form>
    )
}

export default Form