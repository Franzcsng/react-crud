import './Layout.scss'
import Header from '../../components/common/header/Header.js'
import Footer from '../../components/common/footer/Footer.js'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return(
        <div className='layout-main'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout