// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomerManagement from '@/Pages/CustomerManagement';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomerManagement />
  </React.StrictMode>
);
