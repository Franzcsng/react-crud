import './Add.scss'
import Form from '../../../components/common/Form.js'
import {useState } from 'react'
import axios from 'axios'

const Add = (props) => {
    let display;
    props.display ? display = props.display : display ='none'
    const setDisplay = props.set 
    const setUpdate = props.checkUpdate
    const [data, setData] = useState({
                        item_name: '',
                        item_price: '',
                        item_quantity: '',
                    })
    

    const handleSubmit = (e, route) => {
        e.preventDefault()
        
        axios.post(`http://localhost:5000/items`, data)
        .then((res) => {
            setUpdate(true)
            console.log(`Successfully added the following: ${res}`)
        })
        .catch((err) => console.log(err))
    }


    return(
        <div 
        className='add-modal' style={{display: `${display}`}} 
        >
            
            <div className='add-body'>
                <div className='head'>
                    <h2> ADD AN ITEM</h2>
                    <button onClick={() => setDisplay('none')}>CLOSE</button>
                </div>

                <Form
                    fields={[
                        {name: "Item", type: "text", placeholder: "Enter item name", value: 'item_name'},
                        {name: "Price", type: "text", placeholder: "Enter price", value: 'item_price'},
                        {name: "Quantity", type: "text", placeholder: "Enter quantity", value: 'item_quantity'},
                    ]}
                    data={data}
                    setData={setData}
                    submit={handleSubmit}
                    checkUpdate={props.checkUpdate}
                    button='ADD ITEM'
                />
            </div>

        </div>
    )
}

export default Add