import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWXlfeHRURGBfWUd/XkZWYUs=');
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);