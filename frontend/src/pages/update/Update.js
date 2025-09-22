import './Update.scss'
import {useParams} from "react-router"
import Form from '../../components/common/Form.js'
import {useState , useEffect} from 'react'
import axios from 'axios'

const Update = () => {
    let params = useParams();
    const id = params.id;

    const [item, setItem] = useState({})

    useEffect(() => {
        axios.get(`/item/${id}`)
        .then((res) => {
            console.log(res)
            setItem(res.data[0])
        })
    }, [])

    return (
        <div className='update-page'>
            <div className='update-wrapper'>
            
                <h1>{`ITEM: ${item.item_name}, ID: ${item.id}`}</h1>
                <Form
                    fields={[
                        {name: "Item", type: "text", placeholder: "Enter item name", value: 'item_name', itemValue: item.item_name},
                        {name: "Price", type: "text", placeholder: "Enter price", value: 'item_price', itemValue: item.item_price},
                        {name: "Quantity", type: "text", placeholder: "Enter quantity", value: 'item_quantity', itemValue: item.item_quantity},
                    ]}
                    data={{
                        item_name: '',
                        item_price: '',
                        item_quantity: '',
                    }}

                    route={`/item/${id}`}
                    button='UPDATE'
                />
            </div>
            
        </div>
    )
}

export default Update