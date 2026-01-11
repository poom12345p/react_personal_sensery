import { lazy, Suspense,StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'antd/dist/reset.css'
import { BrowserRouter } from "react-router-dom";
//import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import Router from "./router";
import ContentBlock from "./components/ContentBlock"
import IntroContent from "./content/IntroContent.json";


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Router />
  </BrowserRouter>
)
