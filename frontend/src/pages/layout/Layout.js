import './Layout.scss'
import {Outlet} from  'react-router-dom'

const Layout = () => {
    return (
        <div className='app-layout'>

            <div className='layout-main'>
                <Outlet/>
            </div>

        </div>
    )
}

export default Layout