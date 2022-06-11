import React from 'react'
import { BrowserRouter, Router, useRoutes } from 'react-router-dom'
import {GetRoutes} from './routes/index'
import './style/App.css'
import './style/base.css'

export default function App() {

  return (
    <div>
      {<GetRoutes/>}
    </div>
  )
}
