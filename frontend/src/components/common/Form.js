import './Form.scss'

const Form = (props) => {

    const fields = props.fields
    const generateFields = (fields) => {
        // { name: "", type: "", placeholder: ""}

        return fields.map((field, index) => 
            (
                <>
                    <label key={index} for={field.name}>{field.name}</label>
                    <input type={field.type} id={field.name} name={field.name} placeholder={field.placeholder}></input>
                </>
            )
        )
    }

    return (
        <form className='form-main'>

            {fields && generateFields(fields)}
            <button type='submit'>ADD</button>

        </form>
    )
}

export default Form