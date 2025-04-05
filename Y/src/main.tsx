// // src/main.tsx
import CustomerManagement from '@/Pages/CustomerManagement';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Landing from './Pages/Landing.js'
// import ContactUs from './components/ui/Contact.js';
import AboutUs from './components/landing/AboutUs.js';
import Documentation from './Pages/Documentation.js';
import PrivacyPolicy from './components/landing/PrivacyPolicy.js';
import TermsOfService from './Pages/TermsOfService.js';
import BlogPage from './Pages/Blog.js';
import BlogPost from './Pages/BlogPost.js';
import ContactSection from '@/components/landing/ContactSection.js';
import Support from './components/landing/support.js';
// Removed incomplete import statement

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Landing />} />
      <Route path='CustomerManagement' element={<CustomerManagement />} />
      <Route path='contact' element={<ContactSection />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='documentation' element={<Documentation />} />
      <Route path='Privacy-Policy' element={<PrivacyPolicy />} />
      <Route path='terms-of-service' element={<TermsOfService />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="support" element={<Support />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
