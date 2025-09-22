import logo from './logo.svg';
import './App.css';
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Layout from './pages/layout/Layout.js'
import Home from './pages/home/Home.js'
import Update from './pages/update/Update.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/item/:id' element={<Update/>}/>
    </Route>
  )
)

function App() {
   return <RouterProvider router={router}/>
}

export default App;
