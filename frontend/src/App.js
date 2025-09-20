import logo from './logo.svg';
import './App.css';
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'

import Layout from './pages/layout/Layout.js'
import Home from './pages/home/Home.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
    </Route>
  )
)

function App() {
   return <RouterProvider router={router}/>
}

export default App;
