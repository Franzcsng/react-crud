import './Home.scss'
import {NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Link} from 'react-router'
import axios from 'axios'
import Add from './add/Add.js'

const Home = () => {

    const [display, setDisplay] = useState('none')
    const [update, setUpdate] = useState(true)
    const [data, setData] = useState()

    useEffect(() => {
        if(update){
            setUpdate(false)
             axios.get('http://localhost:5000/items')
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
       
    }, [update]) 

    const deleteItem = (id) => {
        axios.delete(`http://localhost:5000/items/${id}`)
        .then((res) => {
            setUpdate(true)
            console.log('Succesfully delete item' + id)
        })  
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='home-main'>

            <div className='dashboard'>

                <div className='head'>
                    <h2>ITEMS</h2>

                    <div className='nav-btns'>
                        <NavLink onClick={() => setDisplay('flex')}>ADD</NavLink>

                    </div>
                </div>

                <div className='table-wrapper'>
                    <table>
                        <thead>
                            <tr>
                                <th> ID </th>
                                <th> ITEM </th>
                                <th> PRICE </th>
                                <th> QUANTITY </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td><Link to={`/item/${item.id}`}>{item.item_name}</Link></td>
                                    <td>{item.item_price}</td>
                                    <td>{item.item_quantity}</td>
                                    <td><button onClick={() => deleteItem(item.id)}>DELETE</button></td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

            <Add
                display={display}
                set={setDisplay}
                checkUpdate={setUpdate} //
            />

        </div>
    )
}

export default Home