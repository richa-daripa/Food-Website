
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './contextapi/ContextAPI.jsx';
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import AuthProvider from './contextapi/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </AuthProvider>
    
  </BrowserRouter>
)
