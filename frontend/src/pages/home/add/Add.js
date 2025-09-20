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
                        {name: "Item", type: "text", placeholder: "Enter item name"},
                        {name: "Price", type: "text", placeholder: "Enter price"},
                        {name: "Quantity", type: "text", placeholder: "Enter quantity"},
                    ]}
                />
            </div>

        </div>
    )
}

export default Add