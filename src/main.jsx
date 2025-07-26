
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './contextapi/ContextAPI.jsx';
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
)
