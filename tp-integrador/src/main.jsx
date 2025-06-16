import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './services/store.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // Importa el CSS de Bootstrap.
import './index.css' //
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Esto incluye Popper y el JS necesario
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importo el paquete de iconos bootstrap

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
