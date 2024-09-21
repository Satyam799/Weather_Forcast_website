import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Homescreen from './Screens/Homescreen.jsx'
import Screen from './Screens/Screen-1.jsx'
import Secratescreen from './Screens/Secratescreen.jsx'
import Screen2 from './Screens/Screen-2.jsx'
import { Providerr } from './Screens/Context.jsx'
import { Provider } from 'react-redux'
import { store } from './Complete-redux/store.js'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route index={true} path='/' element={<Homescreen/>}/>
        <Route path='/screen1' element={<Screen/>}/>
        <Route  path='' element={<Secratescreen/>}>
            <Route path='/screen2' element={<Screen2/>}/>
        </Route>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providerr>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </Providerr>
  </React.StrictMode>,
)
