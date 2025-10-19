import './Add.scss'
import Form from '../../../components/common/Form.js'
import {useState } from 'react'
import axios from 'axios'

const Add = (props) => {
    const setDisplay = props.set // Set state function passed from parent component to handle display toggle of modal
    const setUpdate = props.checkUpdate // Set state function to toggle table state change on data submit/add
    

    // useState to store input into data variable for submission
    const [data, setData] = useState({
                        item_name: '',
                        item_price: '',
                        item_quantity: '',
                    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/items`, data)
        .then((res) => {
            setUpdate(true)
            console.log(`Successfully added the following: ${res}`)
        })
        .catch((err) => console.log(err))
    }

    //Array to be passed as prop into form component that contains objects that each represents an input field 
    //Each "value" key must match "data" object useState variable 
    const input_fields = [
        {
            name: "item", 
            label: "Item", 
            type: "text", 
            placeholder: "Enter item name", 
            value: 'item_name',                    
            validation: {
                required: `Item name is required`
            }
        },
        {
            name: "price", 
            label: "Price", 
            type: "text", 
            placeholder: "Enter price", 
            value: 'item_price',
            validation: {
                required: `Price is required`
            }
        },
        {
            name: "quantity", 
            label: "Quantity", 
            type: "text", 
            placeholder: "Enter quantity", 
            value: 'item_quantity',
            validation: {
                
            }
        },
    ]


    return(
        <div 
        className='add-modal' style={{display: `${props.display}`}} 
        >
            
            <div className='add-body'>
                <div className='head'>
                    <h2> ADD AN ITEM</h2>
                    <button onClick={() => setDisplay('none')}>CLOSE</button>
                </div>

                <Form
                    fields={input_fields}
                    data={data}
                    setData={setData}
                    submit={handleSubmit}
                    button='ADD ITEM'
                />
            </div>

        </div>
    )
}

export default Add