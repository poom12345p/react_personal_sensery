import { lazy, Suspense,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

import 'antd/dist/reset.css'
import { BrowserRouter } from "react-router-dom";
import Router from "./router";



createRoot(document.getElementById('root')).render(
 <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Router />
  </BrowserRouter>
)
