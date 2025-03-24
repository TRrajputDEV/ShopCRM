// // src/main.tsx
import CustomerManagement from '@/Pages/CustomerManagement';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Landing from './Pages/Landing.js'
import ContactUs from './components/ui/Contact.js';
import AboutUs from './components/ui/About.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Landing />} />
      <Route path='CustomerManagement' element={<CustomerManagement />} />
      <Route path='Contact' element={<ContactUs />} />
      <Route path='about' element={<AboutUs />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
