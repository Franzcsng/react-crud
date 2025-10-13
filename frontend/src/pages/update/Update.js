import './Update.scss'
import {useParams} from "react-router"
import Form from '../../components/common/Form.js'
import {useState , useEffect} from 'react'
import axios from 'axios'

const Update = () => {

    //Extract item ID params from page URL
    let params = useParams();
    const id = params.id;

    //useState data hook to set item data after useEffect axios fetch
    const [data, setData] =  useState({})

    //API data request using item ID params
    useEffect(() => {
        axios.get(`/items/${id}`)
        .then((res) => {
            console.log(res.data[0])

            //Item info passed to data variable
            setData(res.data[0])
        })
        .catch((err) => console.log(err))
        
    }, [])


    //Submit function with PUT API to update fetched item details 
    const handleSubmit = (e, route) => {
        e.preventDefault()

        axios.put(`/items/${id}`, data)
        .then((res) => {
            console.log('Item updated succesfully: ' +  res)
        })
        .catch((err) => {
            console.log('Error updating item: ' + err)
        }) 
    }


    return (
        <div className='update-page'>
            <div className='update-wrapper'>
            
                <h1>{`ITEM: ${data.item_name}, ID: ${data.id}`}</h1>
                
                <Form
                    fields={[
                        {name: "item", label: "Item", type: "text", placeholder: "Enter item name", value: 'item_name' },
                        {name: "price", label: "Price", type: "text", placeholder: "Enter price", value: 'item_price' },
                        {name: "quantity", label: "Quantity", type: "text", placeholder: "Enter quantity", value: 'item_quantity'},
                    ]}
                    data={data}
                    setData={setData}

                    submit={handleSubmit}
                    button='UPDATE'
                />
            </div>
            
        </div>
    )
}

export default Update