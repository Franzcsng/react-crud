import './Update.scss'
import {useParams} from "react-router"
import Form from '../../components/common/Form.js'
import {useState , useEffect} from 'react'
import axios from 'axios'

const Update = () => {

    let params = useParams();
    const id = params.id;
    const [data, setData] =  useState({})

    useEffect(() => {
        axios.get(`/item/${id}`)
        .then((res) => {
            console.log(res.data[0])
            setData(res.data[0])
        })
        .catch((err) => console.log(err))
        
    }, [])


    const handleSubmit = (e, route) => {
        e.preventDefault()

        axios.put(`/item/${id}`, data)
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
                        {name: "Item", type: "text", placeholder: "Enter item name", value: 'item_name' },
                        {name: "Price", type: "text", placeholder: "Enter price", value: 'item_price' },
                        {name: "Quantity", type: "text", placeholder: "Enter quantity", value: 'item_quantity'},
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