import './Add.scss'
import Form from '../../../components/common/Form.js'
import {useState } from 'react'

const Add = (props) => {
    let display;
    props.display ? display = props.display : display ='none'
    const setDisplay = props.set 
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
                    data={{
                        item_name: '',
                        item_price: '',
                        item_quantity: '',
                    }}

                    route='/items'
                />
            </div>

        </div>
    )
}

export default Add