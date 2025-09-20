import './Home.scss'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import Add from './add/Add.js'

const Home = () => {

    const [display, setDisplay] = useState('none')

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
                        <tr>
                            <th> ID </th>
                            <th> ITEM </th>
                            <th> PRICE </th>
                            <th> ITEM </th>
                        </tr>
                    </table>
                </div>

            </div>

            <Add
                display={display}
                set={setDisplay}
            />

        </div>
    )
}

export default Home